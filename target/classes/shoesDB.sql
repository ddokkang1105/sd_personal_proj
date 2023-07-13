create table sdproj_shoes(
    s_no number(3) primary key,
    s_brand varchar2(20 char) not null,
    s_class varchar2(50 char) not null,
    s_name varchar2(100 char) not null,
    s_price number(7) not null,
    s_color varchar2(50 char) not null,
    s_when date not null,
    s_keyword varchar2(300 char) not null,
    s_image varchar2(200 char) not null
);

create sequence sdproj_shoes_seq;
truncate TABLE sdproj_shoes;
select * from sdproj_shoes order by s_no;
drop SEQUENCE sdproj_shoes_seq;
drop table sdproj_shoes CASCADE constraint purge;

insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Jordan', 'Fashion/BasketBall', 'Jordan 1 Retro High OG Black and Lucky Green',
                                                219000, 'BLACK/GREEN/WHITE', '2023-04-15', 'nike/fashion/basketball/jordan/jordan 1 retro high og black and lucky green/나이키/패션/패션화/농구/농구화/조던/검정색/흰색/인기/올해/쿠션/편안함/ ', 
                                                '1_0.png,1_1.png,1_2.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Nike', 'Fashion', 'Nike x Run The Jewels SB Dunk Low Deep Royal Blue and Active Pink',
                                                159000, 'DEEP ROYAL BLUE/ACTIVE PINK/BLUE CHILL', '2023-04-20', 'nike/fashion/nike x run the jewels sb dunk low deep royal blue and active pink/나이키/조던/패션/패션화/인기/올해/덩크/로우/올해/파랑색/ ', 
                                                '2_0.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Jordan', 'Fashion/BasketBall', 'Jordan 1 Low SE Tokyo 96',
                                                139000, 'DUTCH BLUE/SMOKE GREY/SAIL', '2023-04-01', 'jordan/fashion/basketball/jordan 1 low se tokyo 96/나이키/패션/패션화/인기/농구화/조던/파랑색/회색/올해/로우/덩크 ', 
                                                '3_0.png,3_1.png,3_2.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Nike', 'Fashion', 'Nike x Peaceminusone Kwondo1 Black and White',
                                                229000, 'BLACK/WHITE', '2023-04-11', 'nike/fashion/nike x peaceminusone kwondo1 black and white/나이키/패션/패션화/인기/검정색/흰색/올해/ ', 
                                                '4_0.png,4_1.png,4_2.png,4_3.png,4_4.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'New Balance', 'Fashion/Running', 'New Balance x Aime Leon Dore 860v2 Green',
                                                200000, 'SEA SALT/GREEN/SILVER', '2023-04-04', 'new balance/fashion/running/new balance x aime leon dore 860v2 green/뉴발란스/패션/패션화/러너/달리기/올해/인기/녹색/회색/쿠션/편안함/ ', 
                                                '5_0.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Adidas', 'Fashion', 'Adidas Samba Vegan White Black',
                                                139000, 'FOOTWEAR WHITE/CORE BLACK/GUM', '2021-07-27', 'adidas/fashion/adidas samba vegan white black/아디다스/패션/패션화/인기/흰색/검은색/ ', 
                                                '6_0.png,6_1.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Asics', 'Fashion/Running', 'Asics Gel-Venture 6 Feather Grey Black',
                                                89000, 'FEATHER GREY/BLACK', '2023-02-10', 'asics/fashion/running/asics gel-venture 6 feather grey blac/아식스/패션/패션화/러너/달리기/인기/올해/회색/검은색/쿠션/편안함/ ', 
                                                '7_0.png,7_1.png,7_2.png,7_3.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Adidas', 'Fashion/Running', 'Adidas Yeezy Foam RNNR Sand',
                                                129000, 'SAND/SAND/SAND', '2021-03-26', 'adidas/fashion/running/adidas yeezy foam rnnr sand/아디다스/패션/패션화/인기/이지/이지폼/러너/샌드/구멍/송송/쿠션/편안함/ ', 
                                                '8_0.png,8_1.png,8_2.png,8_3.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Jordan', 'Fashion/BasketBall', 'Jordan 4 x Nike SB Retro Pine Green',
                                                269000, 'SAIL/WHITE/PINE GREEN', '2023-03-21', 'jordan/fashion/basketball/jordan 4 x nike sb retro pine green/조던/패션/패션화/인기/농구화/올해/흰색/녹색/쿠션/편안함/ ', 
                                                '9_0.png,9_1.png,9_2.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Adidas', 'Fashion', 'Adidas Superstar Core Black White',
                                                119000, 'CORE BLACK/FOOTWEAR WHITE', '2019-12-23', 'adidas/fashion/adidas superstar core black white/아디다스/패션/패션화/인기/슈퍼스타/검정색/흰색 ', 
                                                '10_0.png,10_1.png,10_2.png,10_3.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Jordan', 'Fashion/BasketBall', 'Jordan 3 Retro White Cement Reimagined',
                                                259000, 'SUMMIT WHITE/FIRE RED/BLACK/CEMENT GREY', '2023-04-08', 'jordan/fashion/basketball/jordan 3 retro white cement reimagined/조던/패션/패션화/농구화/인기/올해/흰색/검정색/회색/쿠션/편안함/ ', 
                                                '11_0.png,11_1.png,11_2.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Asics', 'Fashion/Running', 'Asics Gel-Venture 6 Carrier Grey',
                                                89000, 'CARRIER GREY/GLACIER GREY', '2023-02-10', 'asics/fashion/running/asics gel-venture 6 carrier grey/아식스/패션/패션화/러너/달리기/올해/인기/회색/쿠션/편안함/ ', 
                                                '12_0.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Jordan', 'Fashion/BasketBall', 'Jordan 1 Low Bred Toe',
                                                129000, 'WHITE/BLACK/UNIVERSITY RED', '2022-02-17', 'jordan/fashion/basketball/jordan 1 low bred toe/조던/패션/패션화/인기/농구화/로우/흰색/검정색/빨강색/ ', 
                                                '13_0.png,13_1.png,13_2.png,13_3.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Nike', 'Fashion/Running', 'Nike ZoomX Vaporfly Next 3 White Grey',
                                                299000, 'WHITE/PARTICLE GREY/METALLIC SILVER', '2023-03-06', 'nike/fashion/running/nike zoomx vaporfly next 3 white grey/나이키/패션/패션화/러너/달리기/줌/베이퍼플라이/흰색/회색/올해/인기/쿠션/편안함/ ', 
                                                '14_0.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Jordan', 'Fashion/BasketBall', 'Jordan 1 Retro High OG Dark Marina Blue',
                                                209000, 'DARK MARINA BLUE/BLACK/WHITE', '2022-01-15', 'jordan/fashion/basketball/jordan 1 retro high og dark marina blue/조던/패션/패션화/농구화/인기/하이/레트로/파랑색/검정색/흰색/쿠션/편안함/ ', 
                                                '15_0.png,15_1.png,15_2.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Jordan', 'Fashion/BasketBall', 'Jordan 1 Low Stealth and White',
                                                129000, 'STEALTH/WHITE-SAIL', '2022-08-07', 'jordan/fashion/basketball/jordan 1 low stealth and white/조던/패션/패션화/농구화/인기/로우/회색/흰색/ ', 
                                                '16_0.png,16_1.png,16_2.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Jordan', 'Fashion/BasketBall', 'Jordan 1 Retro High OG Chicago 2022',
                                                209000, 'VARSITY RED/BLACK/SAIL/MUSLIN', '2022-12-01', 'jordan/fashion/basketball/jordan 1 retro high og chicago 2022/조던/패션/패션화/농구화/인기/하이/레트로/빨강색/시카고/검정색/쿠션/편안함/ ', 
                                                '17_0.png,17_1.png,17_2.png,17_3.png,17_4.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Jordan', 'Fashion/BasketBall', 'Jordan 6 Retro Infrared White 2014',
                                                226000, 'WHITE/INFRARED', '2014-02-16', 'jordan/fashion/basketball/jordan 6 retro infrared white 2014/조던/패션/패션화/농구화/인기/레트로/흰색/슬램덩크/강백호/쿠션/편안함/ ', 
                                                '18_0.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Jordan', 'Fashion/BasketBall', 'Jordan 1 Retro High OG Patent Bred',
                                                199000, 'BLACK/VARSITY RED-WHITE', '2021-12-23', 'jordan/fashion/basketball/jordan 1 retro high og patent bred/조던/패션/패션화/농구화/인기/검정색/빨강색/레트로/하이/슬램덩크/강백호/쿠션/편안함/ ', 
                                                '19_0.png,19_1.png,19_2.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Asics', 'Fashion/BasketBall', 'Asics Tiger Gel-PTG MT White Classic Red',
                                                99000, 'WHITE/CLASSIC RED', '2021-01-01', 'asics/fashion/basketball/asics tiger gel-ptg mt white classic red/아식스/패션/패션화/농구화/인기/흰색/빨강색/슬램덩크/정대만/ ', 
                                                '20_0.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Jordan', 'Fashion/BasketBall', 'Jordan 5 Retro Fire Red Silver Tongue 2020',
                                                239000, 'WHITE/BLACK-METALLIC SILVER-FIRE RED', '2020-05-02', 'jordan/fashion/basketball/jordan 5 retro fire red silver tongue 2020/조던/패션/패션화/농구화/인기/레트로/흰색/빨강색/슬램덩크/서태웅/쿠션/편안함/ ', 
                                                '21_0.png,21_1.png,21_2.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Converse', 'Fashion/BasketBall', 'Converse Accelerator Mid',
                                                9999999, 'WHITE/RED/BLACK', '1992-01-01', 'converse/fashion/basketball/converse accelerator mid/컨버스/패션/패션화/농구화/인기/미드/흰색/빨강색/슬램덩크/송태섭/품절/쿠션/편안함/ ', 
                                                '22_0.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Converse', 'Fashion/BasketBall', 'Converse PRO Conquest High',
                                                9999999, 'WHITE/BLACK', '1992-01-01', 'converse/fashion/basketball/converse pro conquest high/컨버스/패션/패션화/농구화/인기/하이/흰색/검정색/슬램덩크/채치수/쿠션/편안함/ ', 
                                                '23_0.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Nike', 'Running', 'Nike Pegasus 40',
                                                149000, 'BLACK/IRON GREY/WHITE', '2023-04-06', 'nike/running/nike pegasus 40/나이키/러너/달리기/흰색/쿠션/올해/인기/편안함/ ', 
                                                '24_0.png,24_1.png,24_2.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Adidas', 'Running', 'Adidas Ultraboost 1.0',
                                                199000, 'CORE BLACK', '2023-01-11', 'adidas/running/adidas ultraboost 1.0/아디다스/올해/인기/러너/달리기/검정색/쿠션/편안함/ ', 
                                                '25_0.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Adidas', 'Running', 'Adidas Galaxy 4 Running Shoes',
                                                69000, 'BLACK/WHITE', '2019-02-01', 'adidas/running/adidas galaxy 4 running shoes/아디다스/러너/달리기/검정색/흰색/인기/쿠션/편안함/ ', 
                                                '26_0.png,26_1.png,26_2.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Nike', 'Running', 'Nike Invincible 3',
                                                209000, 'BLACK/WHITH', '2023-01-27', 'nike/running/nike invincible 3/나이키/러너/달리기/올해/인기/검정색/ ', 
                                                '27_0.png,27_1.png,27_2.png,27_3.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Adidas', 'Soccer', 'Adidas X Speedportal Leyenda.1',
                                                309000, 'GOLD METALLIC/CLOUD WHITE/PULSE BLUE', '2022-11-22', 'adidas/soccer/adidas X speedportal leyenda.1/아디다스/스피드포탈/축구화/메시/월드컵/우승/한정판/품절/10/골드/황금/아르헨티나/ ', 
                                                '28_0.png,28_1.png,28_2.png,28_3.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Adidas', 'Soccer', 'Adidas X Speedportal Messi.1 FG',
                                                309000, 'TEAM SOLAR ORANGE/SILVER METALLIC/CORE BLACK', '2023-02-21', 'adidas/soccer/adidas X speedportal messi.1 fg/아디다스/스피드포탈/축구화/메시/천연잔디/ ', 
                                                '29_0.png,29_1.png,29_2.png,29_3.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Adidas', 'Soccer', 'Adidas Nemeziz Messi 19.1 15 Year Firm Ground Boots',
                                                339000, 'BOLD AQUA/GOLD METALLIC/CLOUD WHITE', '2019-01-01', 'adidas/soccer/adidas nemeziz messi 19.1 15 year firm ground boots/아디다스/축구화/메시/한정판/품절/15/30/골드/아쿠아/하늘/황금/아르헨티나/ ', 
                                                '30_0.png,30_1.png,30_2.png,30_3.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Nike', 'Golf', 'Nike Infinity Ace Next Nature',
                                                129000, 'PHANTOM/OIL GREEN/SAIL/EARTH', '2023-03-29', 'nike/golf/nike infinity ace next nature/나이키/골프화/쿠션/올해/녹색/친환경/친환경소재/편안함/ ', 
                                                '31_0.png,31_1.png,31_2.png,31_3.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Nike', 'Fashion/Running/BasketBall/Golf', 'Nike Air Max 97',
                                                219000, 'WHITE/BLACK/WOLF GREY', '1997-01-01', 'nike/fashion/running/basketball/golf/nike air max 97/나이키/패션/패션화/러너/달리기/농구화/골프화/에어맥스/에어/쿠션/인기/흰색/회색/편안함/ ', 
                                                '32_0.png,32_1.png,32_2.png,32_3.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Adidas', 'Golf', 'Adidas Tour360 XT Twin Boa Shoes',
                                                310000, 'CLOUD WHITE/SOLAR SLIME/COLLEGIATE NAVY', '2019-01-01', 'adidas/golf/adidas tour360 xt twin boa shoes/아디다스/골프화/쿠션/편안함/투어/흰색/ ', 
                                                '33_0.png,33_1.png,33_2.png,33_3.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Nike', 'Golf', 'Nike Air Zoom Victory Tour 2',
                                                239000, 'WHITE/CLASSIC RED', '2021-04-03', 'nike/golf/nike air zoom victory tour 2/나이키/골프/쿠션/편안함/에어/에어줌/에어 줌/투어/흰색/ ', 
                                                '34_0.png,34_1.png,34_2.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Kolca', 'Weightlifting', 'Kolca Exciting Balance 220 Phoibos White',
                                                169000, 'WHITE/BLACK', '2020-08-05', 'kolca/weightlifting/kolca exciting balance 220 phoibos white/콜카/국산/국내산/한국/헬스/헬스화/헬스장/역도/리프팅/스쿼트/흰색/ ', 
                                                '35_0.png,35_1.png,35_2.png,35_3.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Kolca', 'Weightlifting', 'Kolca Exciting Balance 220 Phoibos Black',
                                                169000, 'BLACK/WHITE', '2020-08-05', 'kolca/weightlifting/kolca exciting balance 220 phoibos black/콜카/국산/국내산/한국/헬스/헬스화/헬스장/역도/리프팅/스쿼트/검은색/ ', 
                                                '36_0.png,36_1.png,36_2.png,36_3.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Kolca', 'Weightlifting', 'Kolca Exciting Balance 220 Apollo White',
                                                159000, 'WHITE/BLACK', '2020-08-05', 'kolca/weightlifting/kolca exciting balance 220 apollo white/콜카/국산/국내산/한국/헬스/헬스화/헬스장/역도/리프팅/스쿼트/흰색/ ', 
                                                '37_0.png,37_1.png,37_2.png,37_3.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Kolca', 'Weightlifting', 'Kolca Exciting Balance 220 Apollo Black',
                                                159000, 'BLACK/WHITE', '2020-08-05', 'kolca/weightlifting/kolca exciting balance 220 apollo black/콜카/국산/국내산/한국/헬스/헬스화/헬스장/역도/리프팅/스쿼트/검은색/ ', 
                                                '38_0.png,38_1.png,38_2.png,38_3.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Nike', 'Weightlifting', 'Nike Romaleos 4 White',
                                                329000, 'WHITE/BLACK', '2020-04-01', 'nike/weightlifting/nike romaleos 4 white/나이키/헬스/헬스화/헬스장/역도/리프팅/스쿼트/하얀색/ ', 
                                                '39_0.png,39_1.png,39_2.png,39_3.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Nike', 'Weightlifting', 'Nike Romaleos 4 Black',
                                                329000, 'BLACK/WHITE', '2020-04-01', 'nike/weightlifting/nike romaleos 4 black/나이키/헬스/헬스화/헬스장/역도/리프팅/스쿼트/검은색/ ', 
                                                '40_0.png,40_1.png,40_2.png,40_3.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Adidas', 'Weightlifting', 'Adipower Weightlifting 3 Shoes White',
                                                289000, 'WHITE/BLACK', '2022-07-20', 'adidas/weightlifting/adipower weightlifting 3 shoes white/아디다스/헬스/헬스화/헬스장/역도/리프팅/스쿼트/하얀색/ ', 
                                                '41_0.png,41_1.png,41_2.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Adidas', 'Weightlifting', 'Adipower Weightlifting 3 Shoes Black',
                                                289000, 'BLACK/WHITE', '2022-07-20', 'adidas/weightlifting/adipower weightlifting 3 shoes black/아디다스/헬스/헬스화/헬스장/역도/리프팅/스쿼트/검은색/ ', 
                                                '42_0.png,42_1.png,42_2.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Nike', 'Soccer', 'Nike Zoom Mercurial Vapor 15 Elite FG',
                                                289000, 'BLACK/SUMMIT WHITE/VOLT/DARK SMOKE', '2022-11-25', 'nike/soccer/nike zoom mercurial vapor 15 elite fg/나이키/줌/머큐리얼/베이퍼/축구화/천연잔디/검정색/ ', 
                                                '43_0.png,43_1.png,43_2.png,43_3.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Puma', 'Soccer', 'Puma Neymar Jr FUTURE 2.4 FG/AG Men`s Soccer Cleats',
                                                139000, 'FIERY CORAL-GOLD', '2022-11-25', 'puma/soccer/puma neymar jr future 2.4 fg/ag men`s soccer cleats/퓨마/퓨처/네이마르 주니어/축구화/천연잔디/인조잔디/주황색/ ', 
                                                '44_0.png,44_1.png,44_2.png,44_3.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Puma', 'Soccer', 'Puma FUTURE 1.4 FG/AG Soccer Cleats',
                                                259000, 'PARISIAN NIGHT-FIZZY LIGHT-PISTACHIO', '2022-08-01', 'puma/soccer/puma future 1.4 fg/ag soccer cleats/퓨마/퓨처/축구화/천연잔디/인조잔디/남색/파란색/ ', 
                                                '45_0.png,45_1.png,45_2.png,45_3.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Athleta', 'Soccer', 'Athleta O-Rei Treinamento A005 White',
                                                119000, 'WHITE/BLACK', '2022-11-25', 'athleta/soccer/athleta o-rei treinamento a005 white/아슬레타/오레이/일본/캥커루/쿠션/편안함/축구화/인조잔디/흰색/ ', 
                                                '46_0.png,46_1.png,46_2.png,46_3.png');
insert into sdproj_shoes values(sdproj_shoes_seq.nextval, 'Athleta', 'Soccer', 'Athleta O-Rei Treinamento A005 Black',
                                                119000, 'BLACK/WHITE', '2022-11-25', 'athleta/soccer/athleta o-rei treinamento a005 black/아슬레타/오레이/일본/캥커루/쿠션/편안함/축구화/인조잔디/검정색/ ', 
                                                '47_0.png,47_1.png,47_2.png,47_3.png');

