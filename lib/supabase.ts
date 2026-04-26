import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://kvhxuryabsivyqhnbeyv.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2aHh1cnlhYnNpdnlxaG5iZXl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcxOTYwMjQsImV4cCI6MjA5Mjc3MjAyNH0.6Bv0J4ZPi0UW_OtUo-OxooJrh7jxZmB8cYTPjDbjrVs"

export const supabase = createClient(supabaseUrl, supabaseKey)