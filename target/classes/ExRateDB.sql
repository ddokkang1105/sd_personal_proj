create table sdproj_ex_rate (
    er_no number(4) primary key,
    er_when Date not null,
    er_result number(1) not null,
    er_cur_unit varchar2(12 char) not null,
    er_ttb varchar2(12 char) not null,
    er_tts varchar2(12 char) not null,
    er_deal_bas_r varchar2(12 char) not null,
    er_bkpr varchar2(12 char) not null,
    er_yy_efee_r varchar2(12 char) not null,
    er_ten_dd_efee_r varchar2(12 char) not null,
    er_kftc_bkpr varchar2(12 char) not null,
    er_kftc_deal_bas_r varchar2(12 char) not null, 
    er_cur_nm varchar2(12 char) not null
);

create sequence sdproj_ex_rate_seq;

drop sequence sdproj_ex_rate_seq;

truncate table sdproj_ex_rate;

drop table sdproj_ex_rate cascade constraint purge;

select * from sdproj_ex_rate ;

select er_when, er_cur_unit, er_kftc_deal_bas_r, er_cur_nm from sdproj_ex_rate order by er_no;  