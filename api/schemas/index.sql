
create table users (
  id uuid primary key default uuid_generate_v4(),
  auth_id uuid references auth.users(id) on delete cascade,
  name text not null,
  last_name text,
  phone text,
  email text not null unique,
  avatar_url text,
  verified boolean default false,
  address text,
  city text,
  state text,
  zip_code text,
  role text check (role in ('player', 'admin', 'owner')) default 'player',
  reservations_count int default 0,
  created_at timestamp with time zone default now()
);


create table fields (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  type text check (type in ('futbol', 'paddle')),
  description text,
  price_per_hour numeric(10,2),
  location text,
  image_url text,
  created_at timestamp with time zone default now()
);


create table reservations (
  id uuid primary key default uuid_generate_v4(),
  field_id uuid references fields(id),
  user_id uuid references users(id),
  start_time timestamp with time zone not null,
  end_time timestamp with time zone not null,
  status text check (status in ('pending', 'confirmed', 'canceled')) default 'pending',
  payment_status text check (payment_status in ('unpaid', 'paid', 'rejected')) default 'unpaid',
  discount_applied boolean default false,
  created_at timestamp with time zone default now()
);


create table payments (
  id uuid primary key default uuid_generate_v4(),
  reservation_id uuid references reservations(id),
  user_id uuid references users(id),
  method text check (method in ('mercado_pago', 'bank_transfer', 'cash', 'other')),
  amount numeric(10,2),
  verified boolean default false,
  approved_by_admin boolean default false,
  receipt_url text,
  created_at timestamp with time zone default now()
);


create table reviews (
  id uuid primary key default uuid_generate_v4(),
  reservation_id uuid references reservations(id),
  field_id uuid references fields(id),
  user_id uuid references users(id),
  rating int check (rating between 1 and 5),
  comment text,
  created_at timestamp with time zone default now()
);


create table admin_logs (
  id uuid primary key default uuid_generate_v4(),
  admin_id uuid references users(id),
  action_type text,
  description text,
  created_at timestamp with time zone default now()
);


create table notifications (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references users(id),
  title text,
  message text,
  read boolean default false,
  type text,
  created_at timestamp with time zone default now()
);


create table calendar_blocks (
  id uuid primary key default uuid_generate_v4(),
  field_id uuid references fields(id),
  start_time timestamp with time zone not null,
  end_time timestamp with time zone not null,
  reason text,
  created_by uuid references users(id),
  created_at timestamp with time zone default now()
);
