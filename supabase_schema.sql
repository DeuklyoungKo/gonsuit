-- 'contacts' 테이블 생성 SQL
-- Supabase SQL Editor에 복사하여 붙여넣으세요.

CREATE TABLE IF NOT EXISTS contacts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  category TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS (Row Level Security) 설정 (초기 단계에서는 모두 허용하거나 서비스 역할만 허용하도록 설정 가능)
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- 익명 사용자가 데이터를 입력할 수 있도록 정책 추가
CREATE POLICY "Allow anonymous inserts" ON contacts
  FOR INSERT WITH CHECK (true);

-- 관리자만 데이터를 읽을 수 있도록 설정 (필요에 따라 수정)
CREATE POLICY "Allow authenticated reads" ON contacts
  FOR SELECT USING (auth.role() = 'authenticated');
