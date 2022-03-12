package go_nuntio

import (
	"errors"
)

func (x *User) IsVerified() error {
	if x.Metadata == nil {
		return errors.New("metadata is nil")
	} else if x.Metadata.VerifiedAt.IsValid() == false {
		return errors.New("user verifeid at is not valid")
	} else if x.Metadata.Birthdate.IsValid() == false {
		return errors.New("user birthdate is not valid")
	} else if x.Metadata.Name == "" {
		return errors.New("users name is empty")
	} else if x.Metadata.Verified == false {
		return errors.New("verified is empty")
	} else if x.Metadata.Gender == nuntio.Gender_INVALID_GENDER {
		return errors.New("invalid gender type")
	} else if x.Metadata.CountryCode == nuntio.CountryCodeType_INVALID_COUNTRY {
		return errors.New("invalid country code")
	} else if x.Metadata.VerificationProvider == nuntio.VerificationProviderType_INVALID {
		return errors.New("invalid verification provider")
	}
	return nil
}
