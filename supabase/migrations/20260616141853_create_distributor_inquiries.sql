CREATE TABLE IF NOT EXISTS distributor_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company text NOT NULL,
  contact text NOT NULL,
  email text NOT NULL,
  city text,
  region text,
  experience text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE distributor_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "insert_distributor_inquiries" ON distributor_inquiries FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "select_distributor_inquiries" ON distributor_inquiries FOR SELECT TO authenticated USING (true);
CREATE POLICY "update_distributor_inquiries" ON distributor_inquiries FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "delete_distributor_inquiries" ON distributor_inquiries FOR DELETE TO authenticated USING (true);
