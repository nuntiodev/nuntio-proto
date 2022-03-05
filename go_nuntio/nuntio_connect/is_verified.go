package nuntio_connect

import "errors"

func (x *User) IsVerified() error {
	if x.Metadata == nil {
		return errors.New("metadata is nil")
	} else if x.Metadata.VerifiedAt.IsValid() == false {
		return errors.New("user verifeid at is not valid")
	} else if x.Metadata.Birthdata.IsValid() == false {
		return errors.New("user birthdate is not valid")
	} else if x.Metadata.Name == "" {
		return errors.New("users name is empty")
	}
	return nil
}
