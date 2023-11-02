package utils_redis

import (
	"context"
	"github.com/go-redis/redis/v8"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gctx"
	"github.com/gogf/gf/v2/util/gconv"

	"strings"
	"time"
)

type UtilsRedis struct {
}

var redisClient *redis.Client

func Init() {
	redis_sentinel_address, _ := g.Cfg().Get(gctx.New(), "redis.sentinel.address")
	redis_sentinel_password, _ := g.Cfg().Get(gctx.New(), "redis.sentinel.password")
	//g.Log().Line().g.Log().Line().Print(context.TODO(),, redis_sentinel_password, redis_sentinel_address)
	url := strings.Split(redis_sentinel_address.String(), " ")
	url_list := []string{}
	for i, _ := range url {
		url_list = append(url_list, url[i])
	}

	redisClient = redis.NewFailoverClient(&redis.FailoverOptions{
		MasterName:            "mymaster",
		SentinelAddrs:         url_list,
		SentinelPassword:      "",
		RouteByLatency:        false,
		RouteRandomly:         false,
		SlaveOnly:             false,
		UseDisconnectedSlaves: false,
		Dialer:                nil,
		OnConnect:             nil,
		Username:              "",
		Password:              redis_sentinel_password.String(),
		DB:                    0,
		MaxRetries:            0,
		MinRetryBackoff:       0,
		MaxRetryBackoff:       0,
		DialTimeout:           10 * time.Second,
		ReadTimeout:           10 * time.Second,
		WriteTimeout:          10 * time.Second,
		PoolSize:              0,
		MinIdleConns:          0,
		MaxConnAge:            0,
		PoolTimeout:           0,
		IdleTimeout:           0,
		IdleCheckFrequency:    0,
		TLSConfig:             nil,
	})

}

func (UtilsRedis) Set(key string, value string) {
	ctx := context.Background()
	result := redisClient.Set(ctx, key, value, 8*time.Hour)
	g.Log().Line().Print(context.TODO(), "redis args: ", result.String())
}

func (UtilsRedis) SetCustom(key string, value string, exTime time.Duration) {
	ctx := context.Background()
	result := redisClient.Set(ctx, key, value, exTime)
	g.Log().Line().Print(context.TODO(), "redis args: ", result.String())
}

func (UtilsRedis) Get(key string) string {
	ctx := context.Background()
	data := redisClient.Get(ctx, key).Val()
	//fmt.Println("sentinel",data)
	return gconv.String(data)
}

func Incr(key string) {
	ctx := context.Background()
	redisClient.Incr(ctx, key)

}

func (UtilsRedis) Delete(key interface{}) {
	//g.Log().Println("redis_key: ",key)
	ctx := context.Background()
	result := redisClient.Del(ctx, gconv.String(key))

	g.Log().Line().Print(context.TODO(), "redis args: ", result.String())
	//g.Log().Println(result.Result())
}
