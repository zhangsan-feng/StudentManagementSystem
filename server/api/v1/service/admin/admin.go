package admin

import (
	"server/api/v1/service/admin/admin_class"
	"server/api/v1/service/admin/admin_class_curriculum"
	"server/api/v1/service/admin/admin_curriculum"
	"server/api/v1/service/admin/admin_homework"
	"server/api/v1/service/admin/admin_student"
)

type Admin struct {
	Student         *admin_student.AdminStudent
	Class           *admin_class.AdminClass
	Curriculum      *admin_curriculum.AdminCurriculum
	HomeWork        *admin_homework.AdminHomeWork
	ClassCurriculum *admin_class_curriculum.AdminClassCurriculum
}
