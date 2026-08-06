-- ============================================================
-- 008 · waitlist contact fields
-- ------------------------------------------------------------
-- Amplía la tabla waitlist para el formulario de contacto
-- de la landing (nombre, teléfono, mensaje, opt-in).
-- ============================================================

alter table public.waitlist
  add column if not exists name text,
  add column if not exists phone text,
  add column if not exists message text,
  add column if not exists opt_in boolean not null default false;

comment on column public.waitlist.name is 'Nombre del contacto desde la landing.';
comment on column public.waitlist.phone is 'Teléfono opcional del contacto.';
comment on column public.waitlist.message is 'Mensaje del formulario de contacto.';
comment on column public.waitlist.opt_in is 'Si el contacto quiere recibir información.';

-- Upsert público para el formulario de contacto (anon no puede UPDATE directo por RLS).
create or replace function public.upsert_waitlist_contact(
  p_email text,
  p_name text default null,
  p_phone text default null,
  p_message text default null,
  p_opt_in boolean default false,
  p_source text default 'landing'
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  existed boolean;
begin
  select exists(
    select 1 from public.waitlist where email = lower(trim(p_email))
  ) into existed;

  insert into public.waitlist (email, name, phone, message, opt_in, source)
  values (lower(trim(p_email)), p_name, p_phone, p_message, coalesce(p_opt_in, false), p_source)
  on conflict (email) do update set
    name = excluded.name,
    phone = excluded.phone,
    message = excluded.message,
    opt_in = excluded.opt_in,
    source = excluded.source;

  return not existed;
end;
$$;

revoke all on function public.upsert_waitlist_contact(text, text, text, text, boolean, text) from public;
grant execute on function public.upsert_waitlist_contact(text, text, text, text, boolean, text) to anon, authenticated;
