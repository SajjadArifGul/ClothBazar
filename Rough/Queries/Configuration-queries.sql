select * from Configs

insert into Configs ([Key], [value]) values ('FacebookURL', 'https://www.facebook.com/wahab.jadon')

insert into Configs ([Key], [value]) values ('CompanyAddress', 'DHA Karachi')

insert into Configs ([Key], [value]) values ('CompanyPhone', '+92 333 234567')

update Configs set [value] = 'https://www.facebook.com/wahab.jadon' where [Key] = 'FacebookURL'