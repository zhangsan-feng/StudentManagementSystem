package utils_log

import (
	"fmt"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gctx"
	"log"
	"os"
	"time"
)

type UtilsLog struct {
}

var p, _ = g.Cfg().Get(gctx.New(), "logger.path")
var path = p.String()

var infoLogName = path + time.Now().Format("2006-01-02") + ".log"
var debugLogName = path + time.Now().Format("2006-01-02") + ".log"
var warningLogName = path + time.Now().Format("2006-01-02") + ".log"
var errorLogName = path + time.Now().Format("2006-01-02") + ".log"

// 40 黑色 41 红色 42绿色 43棕黄色 44 深蓝色 45 粉色 46蓝绿色 47灰色
const BlackGroundColor = 46 // 背景颜色
const TypeFaceColor = 30    // 字体颜色  30-37 颜色同上
const FontStyle = 1
const pf = "%+v"

func init() {
	os.MkdirAll(path, os.ModePerm)
	log.SetFlags(log.LstdFlags | log.Llongfile)
}

func (UtilsLog) Info(content ...interface{}) {
	data := ""
	for _, v := range content {
		data += fmt.Sprintf(pf, v) + " "

	}
	logFile, err := os.OpenFile(infoLogName,
		os.O_APPEND|os.O_CREATE|os.O_RDWR, 0666)
	if err != nil {
		log.Println("create log file error: ", err)
		panic(err)
	}
	l := log.New(logFile, "[INFO]: ", log.LstdFlags|log.Llongfile)
	err = l.Output(2, fmt.Sprintf(pf, data))
	//l.Println(content)
	if err != nil {
		log.Println("logfile write error : ", err)
		panic(err)
	}

	l2 := log.New(os.Stdout, "[INFO]:  ", log.LstdFlags|log.Lshortfile)
	err = l2.Output(2, fmt.Sprintf(" %c[%d;%d;%dm"+pf+"%c[0m ", 0x1B, 42, FontStyle, TypeFaceColor, data, 0x1B))
	if err != nil {
		log.Println("os stdout error: ", err)
		panic(err)
	}
}

func (UtilsLog) Error(content ...interface{}) {
	data := ""
	for _, v := range content {
		data += fmt.Sprintf(pf, v) + " "

	}
	logFile, err := os.OpenFile(errorLogName,
		os.O_APPEND|os.O_CREATE|os.O_RDWR, 0666)
	if err != nil {
		log.Println("create log file error: ", err)
		panic(err)
		//g.Log().Println("create log file err: ", err)
		//return
	}
	l := log.New(logFile, "[ERROR]: ", log.LstdFlags|log.Llongfile)
	err = l.Output(2, fmt.Sprintf(pf, data))
	//l.Println(content)
	if err != nil {
		log.Println("logfile write error : ", err)
		panic(err)
		//g.Log().Println("logfile write err : ", err)
		//return
	}

	l2 := log.New(os.Stdout, "[ERROR]: ", log.LstdFlags|log.Llongfile)

	err = l2.Output(2, fmt.Sprintf(" %c[%d;%d;%dm"+pf+"%c[0m ", 0x1B, 41, FontStyle, TypeFaceColor, data, 0x1B))

	if err != nil {
		log.Println("os stdout error: ", err)
		panic(err)
		//g.Log().Println("os stdout  err: ", err)

		//return
	}
}

func (UtilsLog) Debug(content ...interface{}) {

	data := ""
	for _, v := range content {
		data += fmt.Sprintf(pf, v) + " "

	}
	logFile, err := os.OpenFile(debugLogName,
		os.O_APPEND|os.O_CREATE|os.O_RDWR, 0666)
	if err != nil {
		log.Println("create log file error: ", err)
		panic(err)
	}
	l := log.New(logFile, "[DEBUG]: ", log.LstdFlags|log.Llongfile)
	err = l.Output(2, fmt.Sprintf(pf, data))
	if err != nil {
		log.Println("logfile write error : ", err)
		panic(err)
	}

	l2 := log.New(os.Stdout, "[DEBUG]: ", log.LstdFlags|log.Llongfile)
	err = l2.Output(2, fmt.Sprintf(" %c[%d;%d;%dm"+pf+"%c[0m ", 0x1B, 46, FontStyle, TypeFaceColor, data, 0x1B))
	if err != nil {
		log.Println("os stdout error: ", err)
		panic(err)
	}
}

func (UtilsLog) Warning(content ...interface{}) {
	data := ""
	for _, v := range content {
		data += fmt.Sprintf(pf, v) + " "

	}

	logFile, err := os.OpenFile(warningLogName,
		os.O_APPEND|os.O_CREATE|os.O_RDWR, 0666)
	if err != nil {
		log.Println("create log file error: ", err)
		panic(err)
	}
	l := log.New(logFile, "[WARNING]: ", log.LstdFlags|log.Llongfile)
	err = l.Output(2, fmt.Sprintf(pf, data))
	if err != nil {
		log.Println("logfile write error : ", err)
		panic(err)
	}

	l2 := log.New(os.Stdout, "[WARNING]: ", log.LstdFlags|log.Llongfile)
	err = l2.Output(2, fmt.Sprintf(" %c[%d;%d;%dm"+pf+"%c[0m ", 0x1B, 45, FontStyle, TypeFaceColor, data, 0x1B))
	if err != nil {
		log.Println("os stdout error: ", err)
		panic(err)
	}
}
