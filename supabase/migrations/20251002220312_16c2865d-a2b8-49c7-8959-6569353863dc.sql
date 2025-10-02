-- Create items table for lost and found
CREATE TABLE public.items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  image_url TEXT,
  location VARCHAR(255),
  date_found DATE NOT NULL,
  contact VARCHAR(100) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.items ENABLE ROW LEVEL SECURITY;

-- Allow public read access (anyone can search for items)
CREATE POLICY "Allow public read access"
ON public.items
FOR SELECT
USING (true);

-- Allow public insert access (anyone can list found items)
CREATE POLICY "Allow public insert access"
ON public.items
FOR INSERT
WITH CHECK (true);

-- Create storage bucket for item images
INSERT INTO storage.buckets (id, name, public)
VALUES ('item-images', 'item-images', true);

-- Allow public read access to item images
CREATE POLICY "Public read access for item images"
ON storage.objects
FOR SELECT
USING (bucket_id = 'item-images');

-- Allow public upload of item images
CREATE POLICY "Public upload for item images"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'item-images');