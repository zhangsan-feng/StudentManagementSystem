create database StudentManagementSystem default character set utf8mb4 collate utf8mb4_general_ci ;

use StudentManagementSystem;
drop table user;
create table `user` (
    `id` int not null auto_increment comment '自增id',
    `username` varchar(20) not null comment '登录名',
    `password` varchar(40) not null comment '密码',
    `student_id`  int      not null comment '学号',
    `phone`       varchar(11) not null comment '电话',
    `sex`         int      not null default 3 comment '性别 0:女 1:男 3:未填写',
    `create_time` datetime not null comment '创建时间',
    `update_time` datetime not null comment '修改时间',
    `role`        int not null  comment '0:管理员,1:学生2:老师',
    primary key (id)
)engine=InnoDB default charset='utf8mb4' collate utf8mb4_general_ci comment '用户';
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('道玄','ovYRj+Q0HiMfsAu0pZkqMw==','000000','12345678990',1,'2023-10-11 14:43:54','2023-10-11 14:43:54',0);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('李逍遥','ovYRj+Q0HiMfsAu0pZkqMw==','000000','12345678990',1,'2023-10-11 14:43:54','2023-10-11 14:43:54',2);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('药尘','ovYRj+Q0HiMfsAu0pZkqMw==','000000','12345678990',1,'2023-10-11 14:43:54','2023-10-11 14:43:54',2);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('萧玄','ovYRj+Q0HiMfsAu0pZkqMw==','000000','12345678990',1,'2023-10-11 14:43:54','2023-10-11 14:43:54',2);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('苍渊','ovYRj+Q0HiMfsAu0pZkqMw==','000000','12345678990',1,'2023-10-11 14:43:54','2023-10-11 14:43:54',2);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('风闲','ovYRj+Q0HiMfsAu0pZkqMw==','000000','12345678990',1,'2023-10-11 14:43:54','2023-10-11 14:43:54',2);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('林静','ovYRj+Q0HiMfsAu0pZkqMw==','000000','12345678990',0,'2023-10-11 14:43:54','2023-10-11 14:43:54',2);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('清衍静','ovYRj+Q0HiMfsAu0pZkqMw==','000000','12345678990',0,'2023-10-11 14:43:54','2023-10-11 14:43:54',2);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('苏灵韵','ovYRj+Q0HiMfsAu0pZkqMw==','000000','12345678990',0,'2023-10-11 14:43:54','2023-10-11 14:43:54',2);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('叶倾仙','ovYRj+Q0HiMfsAu0pZkqMw==','000000','12345678990',0,'2023-10-11 14:43:54','2023-10-11 14:43:54',2);

insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('张若晨','ovYRj+Q0HiMfsAu0pZkqMw==','2023001','12345678990',1,'2023-10-11 14:43:54','2023-10-11 14:43:54',1);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('萧炎','ovYRj+Q0HiMfsAu0pZkqMw==','2023002','12345678990',1,'2023-10-11 14:43:54','2023-10-11 14:43:54',1);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('陈平安','ovYRj+Q0HiMfsAu0pZkqMw==','2023003','12345678990',1,'2023-10-11 14:43:54','2023-10-11 14:43:54',1);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('周元','ovYRj+Q0HiMfsAu0pZkqMw==','2023004','12345678990',1,'2023-10-11 14:43:54','2023-10-11 14:43:54',1);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('韩立','ovYRj+Q0HiMfsAu0pZkqMw==','2023005','12345678990',1,'2023-10-11 14:43:54','2023-10-11 14:43:54',1);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('林柒','ovYRj+Q0HiMfsAu0pZkqMw==','2023006','12345678990',1,'2023-10-11 14:43:54','2023-10-11 14:43:54',1);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('林修崖','ovYRj+Q0HiMfsAu0pZkqMw==','2023007','12345678990',1,'2023-10-11 14:43:54','2023-10-11 14:43:54',1);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('海波东','ovYRj+Q0HiMfsAu0pZkqMw==','2023008','12345678990',1,'2023-10-11 14:43:54','2023-10-11 14:43:54',1);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('云韵','ovYRj+Q0HiMfsAu0pZkqMw==','2023009','12345678990',1,'2023-10-11 14:43:54','2023-10-11 14:43:54',1);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('古河','ovYRj+Q0HiMfsAu0pZkqMw==','2023010','12345678990',1,'2023-10-11 14:43:54','2023-10-11 14:43:54',1);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('武瑶','ovYRj+Q0HiMfsAu0pZkqMw==','2023011','12345678990',0,'2023-10-11 14:43:54','2023-10-11 14:43:54',1);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('苏幼微','ovYRj+Q0HiMfsAu0pZkqMw==','2023012','12345678990',0,'2023-10-11 14:43:54','2023-10-11 14:43:54',1);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('赵牧神','ovYRj+Q0HiMfsAu0pZkqMw==','2023013','12345678990',1,'2023-10-11 14:43:54','2023-10-11 14:43:54',1);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('李纯匀','ovYRj+Q0HiMfsAu0pZkqMw==','2023014','12345678990',1,'2023-10-11 14:43:54','2023-10-11 14:43:54',1);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('楚青','ovYRj+Q0HiMfsAu0pZkqMw==','2023015','12345678990',1,'2023-10-11 14:43:54','2023-10-11 14:43:54',1);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('牧尘','ovYRj+Q0HiMfsAu0pZkqMw==','2023016','12345678990',1,'2023-10-11 14:43:54','2023-10-11 14:43:54',1);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('林动','ovYRj+Q0HiMfsAu0pZkqMw==','2023017','12345678990',1,'2023-10-11 14:43:54','2023-10-11 14:43:54',1);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('绫清竹','ovYRj+Q0HiMfsAu0pZkqMw==','2023018','12345678990',0,'2023-10-11 14:43:54','2023-10-11 14:43:54',1);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('应欢欢','ovYRj+Q0HiMfsAu0pZkqMw==','2023019','12345678990',0,'2023-10-11 14:43:54','2023-10-11 14:43:54',1);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('洛璃','ovYRj+Q0HiMfsAu0pZkqMw==','2023020','12345678990',0,'2023-10-11 14:43:54','2023-10-11 14:43:54',1);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('林琅天','ovYRj+Q0HiMfsAu0pZkqMw==','2023021','12345678990',1,'2023-10-11 14:43:54','2023-10-11 14:43:54',1);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('苏沐橙','ovYRj+Q0HiMfsAu0pZkqMw==','2023022','12345678990',0,'2023-10-11 14:43:54','2023-10-11 14:43:54',1);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('碧瑶','ovYRj+Q0HiMfsAu0pZkqMw==','2023023','12345678990',0,'2023-10-11 14:43:54','2023-10-11 14:43:54',1);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('张小凡','ovYRj+Q0HiMfsAu0pZkqMw==','2023024','12345678990',1,'2023-10-11 14:43:54','2023-10-11 14:43:54',1);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('方清雪','ovYRj+Q0HiMfsAu0pZkqMw==','2023025','12345678990',0,'2023-10-11 14:43:54','2023-10-11 14:43:54',1);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('陆雪琪','ovYRj+Q0HiMfsAu0pZkqMw==','2023026','12345678990',0,'2023-10-11 14:43:54','2023-10-11 14:43:54',1);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('萧逸才','ovYRj+Q0HiMfsAu0pZkqMw==','2023027','12345678990',1,'2023-10-11 14:43:54','2023-10-11 14:43:54',1);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('田灵儿','ovYRj+Q0HiMfsAu0pZkqMw==','2023028','12345678990',0,'2023-10-11 14:43:54','2023-10-11 14:43:54',1);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('段小环','ovYRj+Q0HiMfsAu0pZkqMw==','2023029','12345678990',0,'2023-10-11 14:43:54','2023-10-11 14:43:54',1);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('凌楚楚','ovYRj+Q0HiMfsAu0pZkqMw==','2023030','12345678990',0,'2023-10-11 14:43:54','2023-10-11 14:43:54',1);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('李青风','ovYRj+Q0HiMfsAu0pZkqMw==','2023031','12345678990',1,'2023-10-11 14:43:54','2023-10-11 14:43:54',1);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('徐长卿','ovYRj+Q0HiMfsAu0pZkqMw==','2023032','12345678990',1,'2023-10-11 14:43:54','2023-10-11 14:43:54',1);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('赵日天','ovYRj+Q0HiMfsAu0pZkqMw==','2023032','12345678990',1,'2023-10-11 14:43:54','2023-10-11 14:43:54',1);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('叶良辰','ovYRj+Q0HiMfsAu0pZkqMw==','2023032','12345678990',1,'2023-10-11 14:43:54','2023-10-11 14:43:54',1);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('马日月','ovYRj+Q0HiMfsAu0pZkqMw==','2023032','12345678990',1,'2023-10-11 14:43:54','2023-10-11 14:43:54',1);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('王尼玛','ovYRj+Q0HiMfsAu0pZkqMw==','2023032','12345678990',1,'2023-10-11 14:43:54','2023-10-11 14:43:54',1);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('顾晨曦','ovYRj+Q0HiMfsAu0pZkqMw==','2023032','12345678990',0,'2023-10-11 14:43:54','2023-10-11 14:43:54',1);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('陈灵犀','ovYRj+Q0HiMfsAu0pZkqMw==','2023032','12345678990',0,'2023-10-11 14:43:54','2023-10-11 14:43:54',1);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('顾盼儿','ovYRj+Q0HiMfsAu0pZkqMw==','2023032','12345678990',0,'2023-10-11 14:43:54','2023-10-11 14:43:54',1);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('徐小丫','ovYRj+Q0HiMfsAu0pZkqMw==','2023032','12345678990',0,'2023-10-11 14:43:54','2023-10-11 14:43:54',1);
insert into user(username, password,student_id, phone, sex, create_time, update_time, role) VALUES ('百里鸢','ovYRj+Q0HiMfsAu0pZkqMw==','2023032','12345678990',0,'2023-10-11 14:43:54','2023-10-11 14:43:54',1);


create table `class_user`(
    `class_id` int not null comment '班级id',
    `user_id` int not null  comment '用户id',
    primary key (`user_id`)
)engine=InnoDB default charset='utf8mb4' collate utf8mb4_general_ci comment '班级学生';
insert into class_user(class_id, user_id) VALUES (1,9);
insert into class_user(class_id, user_id) VALUES (2,10);


create table `class`(
    `id` int not null auto_increment comment '',
    `class_number` int not null comment '',
    `teacher_id` int not null comment '老师',
    primary key (`id`)
)engine=InnoDB default charset='utf8mb4' collate utf8mb4_general_ci comment '班级';
insert into class(class_number, teacher_id) values (359,2);
insert into class(class_number, teacher_id) values (372,3);


create table `class_curriculum`(
    `id` int not null auto_increment comment '',
    `class_id` int not null comment '班级id',
    `curriculum_id` int not null comment '课程id',
    `date` varchar(30) not null  comment '周一-周五',
    `start_time` varchar(50) not null comment '上课时间',
    `teacher_id` int not null comment '老师',
    primary key (`id`)
)engine=InnoDB default charset='utf8mb4' collate utf8mb4_general_ci comment '班级课程表';


create table `curriculum`(
    `id` int not null  auto_increment comment '',
    `name` varchar(20) not null comment '科目',
    `describe` varchar(200) not null default '',
    primary key (`id`)
)engine=InnoDB default charset='utf8mb4' collate utf8mb4_general_ci comment '课程';
insert into curriculum(name, `describe`) VALUES ('纵横剑法','为魔教长老曲洋和衡山派高手刘正风所合创，被称为当世最强的剑法之一。');
insert into curriculum(name, `describe`) VALUES ('太极玄清道','青云门最高心法，能够修炼出太极玄清气，增强修为和攻击力。');
insert into curriculum(name, `describe`) VALUES ('疾风剑法','为华山派剑宗高手封不平所创。');
insert into curriculum(name, `describe`) VALUES ('焚诀','黄阶低级功法，但在吞噬异火后不断进化，最终进化成为天阶高级功法。');
insert into curriculum(name, `describe`) VALUES ('天火三玄变','使用三种不同的异火使自身实力暴涨');
insert into curriculum(name, `describe`) VALUES ('天元诀', '是苍玄老祖所创，能够吸收天地间的源气，提升自身的实力。');
insert into curriculum(name, `describe`) VALUES ('太玄圣灵术','夭夭修炼的功法，能够召唤出太玄圣灵，拥有强大的攻击力');
insert into curriculum(name, `describe`) VALUES ('祖龙经','祖龙所创的功法，能够掌控祖龙之力，是龙族的镇族功法。');
insert into curriculum(name, `describe`) VALUES ('太乙天罡术','能够凝聚太乙天罡之气，提升自身的防御力和攻击力。');
insert into curriculum(name, `describe`) VALUES ('四圣纹','苍玄老祖所创的功法，能够凝聚出四圣纹，拥有强大的攻击力。');
insert into curriculum(name, `describe`) VALUES ('通天玄圣诀','能够掌控通天之力，提升自身的实力和境界。');
insert into curriculum(name, `describe`) VALUES ('太初天经','是混元天内的顶尖功法，能够掌控太初之力，提升自身的实力和境界。');
insert into curriculum(name, `describe`) VALUES ('苍玄七术','苍玄老祖所创的功法，包括“龙步”“虎啸”“雀闪”“龟息”“凰翼”“鲲鹏”“雷狱”，每一种都有独特的能力。');
insert into curriculum(name, `describe`) VALUES ('九转阴阳诀','夭夭所传的功法，能够掌控阴阳之力，提升自身的实力和境界。');
insert into curriculum(name, `describe`) VALUES ('太灵经','由太灵老祖所创，是一部顶尖的灵诀，能够增强灵力和肉身的力量。');
insert into curriculum(name, `describe`) VALUES ('太荒芜经','由荒天帝所创，是一部极为强大的功法，能够掌控荒芜之力，增强自身的力量和攻击力。');
insert into curriculum(name, `describe`) VALUES ('灵神诀','由洛神族的洛天神所创，是一部顶尖的灵诀，能够增强灵力和神识的力量');
insert into curriculum(name, `describe`) VALUES ('星辰诀','由星辰阁的阁主所创，是一部极为强大的功法，能够掌控星辰之力，增强自身的力量和攻击力。');
insert into curriculum(name, `describe`) VALUES ('太清仙法','这是一种仙家功法，能够让修炼者拥有强大的仙力，并且能够施展出各种强大的仙术。');
insert into curriculum(name, `describe`) VALUES ('冥王剑印','是冥王剑冢的镇冢之宝');
insert into curriculum(name, `describe`) VALUES ('归一剑诀','是明帝的绝学之一。');
insert into curriculum(name, `describe`) VALUES ('无字剑谱','剑阁中的剑道秘籍，包含三招剑法。');
insert into curriculum(name, `describe`) VALUES ('阴阳五行诀','五行观的镇观之宝，是一部修炼阴阳五行之道的功法。');
insert into curriculum(name, `describe`) VALUES ('九天明帝经','是明帝所创的绝世功法。');
insert into curriculum(name, `describe`) VALUES ('九幽剑诀','不死血族的顶级功法，修炼到巅峰可凝聚出九幽剑。');


create table `commit_homework`(
    `id` int not null auto_increment comment '',
    `student_id` int not null comment '学生id',
    `homework_id` int not null comment '作业id',
    `path` varchar(100) not null comment '作业路径',
    `commit_time` datetime not null comment '提交时间',
    primary key (`id`)
)engine=InnoDB default charset='utf8mb4' collate utf8mb4_general_ci comment '学生提交的作业';


create table `curriculum_homework`(
    `id` int not null auto_increment comment '',
    `class_id` int not null comment '班级',
    `user_id` int not null comment '老师',
    `title` varchar(100) not null comment '标题',
    `create_time` datetime not null comment '发布时间',
    `expire_time` datetime not null comment '到期时间',
    `path` varchar(200) not null comment '文件路径',
    `file_name` varchar(100) not null comment '文件名',
    primary key (`id`)
)engine=InnoDB default charset='utf8mb4' collate utf8mb4_general_ci comment '课程作业';




-- 天之道,损有余而补不足。人之道,损不足而奉有余。是日,人法地,地法天,天法道,道法自然。若夫乘天地之正,而御六气之辩。以游无穷者,彼且恶乎待哉!
create table `major` (
     `id` int not null auto_increment comment '自增id',
     `name` varchar(20) not null comment '专业名称',
     `describe` text not null comment '描述',
     primary key (id)
)engine=InnoDB default charset='utf8mb4' collate utf8mb4_general_ci comment '功法';
insert into major(name, `describe`) VALUES ('天书巫术篇','天地混沌,阴阳二分,三界六道轮回为尊,轮回有灵,灵御浊清,清明神魂,魂归本元');
insert into major(name, `describe`) VALUES ('天书玄道篇','天地万物,生与有,有生与无。无为而行,方能得证天道。造道之功,至于悟性,须当培养命基为本。—门深入,以至六根互用,则五蕴尽而觉体复,六解一亦亡矣。心本无形,因境而有,荀不制六根,欲安其心,修行人,行如风,立如松,坐如钟卧如弓 一切导引,以闭息为主。一切修养以断欲为主。息不闭则炁不聚,欲不断则精不住');
insert into major(name, `describe`) VALUES ('天书天魔篇','天地万物,平等和谐,妖强人弱非永恒也。众生皆平等,无灵长蝼蚁之分,无苍天掌,控芸芸众生之谬言,炼体修真,突破自身,参悟宇宙永恒,突破自身造化');
insert into major(name, `describe`) VALUES ('天书幽冥篇','三魂天地人,五行阴阳风。七魄为灵慧,雷电亦可摧。魂本无形,因境而有之,苟不制六根,应物无迹,操之有法,视为则也。以识神为觉而实非本觉,内视返听,灵明自照,精神自固,屏涤杂念,虚其魄也。养成元神,炯然不昧,离身长往,归还于天。形有尽而神无尽,聚亦吾体,散亦吾体。');
insert into major(name, `describe`) VALUES ('天书亡灵篇','菩萨清凉月,常游毕竟空。众生心垢净,菩提影现中。一切有为法,如梦幻泡影。如露亦如电,应作如是观…众生皆有灵,灵者,非魂也,以心聚灵,得万法超然……宇宙之道,永恒之道,时间之道,空间之道,空间堆积,无穷无尽,大如须弥,小如芥子。是日,一花一世界,一沙一佛国。滴水中蕴含无尽生命');
insert into major(name, `describe`) VALUES ('天书妖道篇','生与有,有生与无,无为虚,虚为道道为永恒也。以自身之造化,夺他人之 功德。以自身之秘法,夺他人之魂魄。以自身之元力,夺他人之灵元。以自身之生命,夺他人之气血。谓之吞噬。吞噬乃自然之道,如虎狼吞之羔羊羔羊吞之嫩草,嫩草吞之大地之精气,而大地之精气源自虎狼羔羊之尸躯,反反复复,轮回不止,生命不息');
insert into major(name, `describe`) VALUES ('天书星辰篇','悟天地星辰 修周天之术，领悟星辰之道，掌握生命之本');
insert into major(name, `describe`) VALUES ('天书轮回篇','宇宙之瀚,寰宇之相,星辰之目,周天之术,轮回之道,生命之本。气血合一天人合一,神魂合一,肉身元神合一。天地之道,人之经络如溪如河,纳百川汇聚丹田为汪洋,可达极致之境,通天彻地,翻云覆雨。轮回之道,又日宇宙之道,以浩瀚天海为汪洋,星辰为岛屿,连接繁琐,互通亦不通。人体如宇宙,周身穴位如宇宙之星辰,千穴百脉,凝聚成星。当从涌泉起,冠汇天灵,终止与少泽');


