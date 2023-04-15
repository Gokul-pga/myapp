
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tqvcctdkuglzjwoyovdb.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxdmNjdGRrdWdsemp3b3lvdmRiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MTMxNjEzMCwiZXhwIjoxOTk2ODkyMTMwfQ.ZPjUch-RXZRLFr9RwHYfzQ_CUerSU3uVVu2LH3CGyPM"
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;