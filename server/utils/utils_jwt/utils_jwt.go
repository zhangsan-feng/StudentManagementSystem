package utils_jwt

import (
	"github.com/golang-jwt/jwt/v4"
	"time"
)

const (
	SIGNED_KEY = "yourkey"
)

type Jwt struct {
}

func (Jwt) CreateToken(Issuer, Subject, ID string, Audience []string) (string, error) {

	CreateToken := jwt.NewWithClaims(jwt.SigningMethodHS512, jwt.RegisteredClaims{
		Issuer:    Issuer,
		Subject:   Subject,
		Audience:  Audience,
		ExpiresAt: &jwt.NumericDate{Time: time.Now().Add(time.Hour * 4)},
		NotBefore: &jwt.NumericDate{Time: time.Now()},
		IssuedAt:  &jwt.NumericDate{Time: time.Now()},
		ID:        ID,
	})

	token, err := CreateToken.SignedString([]byte(SIGNED_KEY))
	if err != nil {
		return "", err
	}
	return token, nil
}

func (Jwt) ParseToken(tokenString string) (jwt.MapClaims, error) {
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		return []byte(SIGNED_KEY), nil
	})
	if err != nil {
		return nil, err
	}
	return token.Claims.(jwt.MapClaims), nil
}
