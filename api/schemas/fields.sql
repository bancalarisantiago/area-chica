insert into fields (id, name, type, description, price_per_hour, location, image_url, owner_id)
values
-- Soccer fields
(gen_random_uuid(), 'Cancha 1 Futbol 5', 'futbol', 'Campo con césped sintético e iluminación LED', 1200, 'Martínez, Buenos Aires', 'https://example.com/cancha1.jpg'),
(gen_random_uuid(), 'Cancha 2 Futbol 7', 'futbol', 'Ideal para partidos nocturnos. Incluye vestuarios.', 1800, 'Martínez, Buenos Aires', 'https://example.com/cancha2.jpg'),

-- Paddle courts
(gen_random_uuid(), 'Paddle A', 'paddle', 'Pista techada con iluminación profesional', 1000, 'Martínez, Buenos Aires', 'https://example.com/paddleA.jpg',),
(gen_random_uuid(), 'Paddle B', 'paddle', 'Césped sintético, excelente para partidos rápidos', 950, 'Martínez, Buenos Aires', 'https://example.com/paddleB.jpg'),
(gen_random_uuid(), 'Paddle C', 'paddle', 'Ideal para principiantes. Iluminación media.', 900, 'Martínez, Buenos Aires', 'https://example.com/paddleC.jpg');