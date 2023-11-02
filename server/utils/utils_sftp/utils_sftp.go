package utils_sftp

import (
	"context"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gctx"
	"github.com/pkg/sftp"
	"golang.org/x/crypto/ssh"
	"io"
	"net"
	"os"
	"path"
	"time"
)

type UtilsSFTP struct {
}

func Init() (*sftp.Client, *ssh.Client) {

	//g.Log().Line().g.Log().Line().Print(context.TODO(),, username, password, address)
	username, _ := g.Cfg().Get(gctx.New(), "sftp.username")
	password, _ := g.Cfg().Get(gctx.New(), "sftp.password")
	address, _ := g.Cfg().Get(gctx.New(), "sftp.address")

	var (
		auth         []ssh.AuthMethod
		addr         string
		clientConfig *ssh.ClientConfig
		sshClient    *ssh.Client
		sftpClient   *sftp.Client
		err          error
	)
	// get auth method
	auth = make([]ssh.AuthMethod, 0)
	auth = append(auth, ssh.Password(password.String()))

	clientConfig = &ssh.ClientConfig{
		User:    username.String(),
		Auth:    auth,
		Timeout: 30 * time.Second,
		HostKeyCallback: func(hostname string, remote net.Addr, key ssh.PublicKey) error {
			return nil
		},
	}

	// connet to ssh
	addr = address.String() + ":22"

	if sshClient, err = ssh.Dial("tcp", addr, clientConfig); err != nil {
		g.Log().Line().Print(context.TODO(), "sftp connect error: "+err.Error())
		return nil, nil
	}

	// create sftp client

	if sftpClient, err = sftp.NewClient(sshClient); err != nil {
		g.Log().Line().Print(context.TODO(), "sftp init client error: "+err.Error())
		return nil, nil
	}
	if err = sftpClient.MkdirAll("./sftp/forensics_procedures"); err != nil {
		g.Log().Line().Print(context.TODO(), "sftp create dir error: "+err.Error())
	}

	return sftpClient, sshClient
}

func (UtilsSFTP) Upload(local_file_path, remote_dir_path string) error {

	// 这里换成实际的 SSH 连接的 用户名，密码，主机名或IP，SSH端口
	sftpClient, ssh_client := Init()
	defer sftpClient.Close()
	defer ssh_client.Close()

	// 用来测试的本地文件路径 和 远程机器上的文件夹
	//localFilePath := "/path/to/local/file/test.txt"
	//remoteDir := "/remote/dir/"

	srcFile, err := os.Open(local_file_path)
	if err != nil {
		return err
	}
	defer srcFile.Close()

	remoteFileName := path.Base(local_file_path)
	dstFile, err := sftpClient.Create(path.Join(remote_dir_path, remoteFileName))
	if err != nil {
		return err
	}
	defer dstFile.Close()
	_, io_copy_err := io.Copy(dstFile, srcFile)
	if io_copy_err != nil {
		return io_copy_err
	}
	//buf := make([]byte, 1024)
	//for {
	//
	//	n, err := srcFile.Read(buf)
	//	if err != nil && err != io.EOF {
	//		return err
	//	}
	//	if n == 0 {
	//		break
	//	}
	//	_, err = dstFile.Write(buf[:n])
	//	if err != nil {
	//		return err
	//	}
	//}

	if err := dstFile.Close(); err != nil {
		g.Log().Line().Print(context.TODO(), err.Error())
	}
	if err := srcFile.Close(); err != nil {
		g.Log().Line().Print(context.TODO(), err.Error())
	}
	if err := sftpClient.Close(); err != nil {
		g.Log().Line().Print(context.TODO(), err.Error())
	}
	if err := ssh_client.Close(); err != nil {
		g.Log().Line().Print(context.TODO(), err.Error())
	}
	//fmt.Error()(gctx.New(),)("copy file to remote server finished!")
	return nil
}

func (UtilsSFTP) DownLoad(local_dir_path, remote_file_path string) error {

	// 这里换成实际的 SSH 连接的 用户名，密码，主机名或IP，SSH端口
	sftpClient, ssh_client := Init()
	defer sftpClient.Close()
	defer ssh_client.Close()
	// 用来测试的远程文件路径 和 本地文件夹
	//var remoteFilePath = "/path/to/remote/path/test.txt"
	//var localDir = "/local/dir/"

	srcFile, err := sftpClient.Open(remote_file_path)
	defer srcFile.Close()
	if err != nil {
		return err
	}

	localFileName := path.Base(remote_file_path)
	dstFile, err := os.Create(path.Join(local_dir_path, localFileName))
	if err != nil {
		return err
	}
	defer dstFile.Close()

	if _, err = srcFile.WriteTo(dstFile); err != nil {
		return err
	}

	if err := dstFile.Close(); err != nil {
		g.Log().Line().Print(context.TODO(), err.Error())
	}
	if err := srcFile.Close(); err != nil {
		g.Log().Line().Print(context.TODO(), err.Error())
	}
	if err := sftpClient.Close(); err != nil {
		g.Log().Line().Print(context.TODO(), err.Error())
	}
	if err := ssh_client.Close(); err != nil {
		g.Log().Line().Print(context.TODO(), err.Error())
	}
	//fmt.Error()(gctx.New(),)("copy file from remote server finished!")
	return nil
}

//func ReadDir(dir_path string) (file_dir_name []string) {
//	sftpClient := Init()
//	defer sftpClient.Close()
//
//	dir, err := sftpClient.ReadDir(dir_path)
//
//	if err != nil {
//		g.Log().Line().Print(context.TODO(), "sftp read dir error: "+err.Error())
//	}
//	//g.Log().Line().Error()(gctx.New(),)(dir)
//	for _, v := range dir {
//		//g.Log().Line().Error()(gctx.New(),)(v.Name())
//		file_dir_name = append(file_dir_name, v.Name())
//	}
//
//	return file_dir_name
//}
//
//func RemoveFile(file_name string) {
//	sftpClient := Init()
//	defer sftpClient.Close()
//	if err := sftpClient.Remove(file_name); err != nil {
//		g.Log().Line().Print(context.TODO(), err)
//	}
//}
