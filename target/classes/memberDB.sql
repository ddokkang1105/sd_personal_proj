create table sdproj_member (
	m_id varchar2(10 char) primary key,
	m_pw varchar2(12 char) not null,
	m_name varchar2(10 char) not null,
	m_phone varchar2(11 char) unique
);

select * from sdproj_member;

insert into sdproj_member values('admin', '1q2w3e4r!', 'admin', '00000000000');

create table sdproj_board (
	b_no number(3) primary key,
	b_writer varchar2(10 char) not null,
	b_when date not null,
	b_text varchar2(200 char) not null,
	b_s_no number(3) not null,
	constraint fk_sdproj_b_writer foreign key(b_writer)
		references sdproj_member(m_id)
		on delete cascade,
	constraint fk_sdproj_b_s_no foreign key(b_s_no)
		references sdproj_shoes(s_no)
		on delete cascade
);

create sequence sdproj_board_seq;

drop sequence sdproj_board_seq;

select * from sdproj_board;

drop table sdproj_board cascade constraint purge;

