import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tqvcctdkuglzjwoyovdb.supabase.co'
const supabaseKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxdmNjdGRrdWdsemp3b3lvdmRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEzMTYxMzAsImV4cCI6MTk5Njg5MjEzMH0.YghfqrfUabvIQhb-kyKhhFybDov9hRaXOEMk6UvDrxM
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;