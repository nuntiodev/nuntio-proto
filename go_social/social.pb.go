// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.26.0
// 	protoc        v3.19.1
// source: social.proto

package go_social

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type CountryCodeType int32

const (
	CountryCodeType_INVALID_COUNTRY CountryCodeType = 0
	CountryCodeType_COUTRY_DK       CountryCodeType = 1
	CountryCodeType_COUNTRY_NO      CountryCodeType = 2
	CountryCodeType_COUNTRY_DE      CountryCodeType = 3
)

// Enum value maps for CountryCodeType.
var (
	CountryCodeType_name = map[int32]string{
		0: "INVALID_COUNTRY",
		1: "COUTRY_DK",
		2: "COUNTRY_NO",
		3: "COUNTRY_DE",
	}
	CountryCodeType_value = map[string]int32{
		"INVALID_COUNTRY": 0,
		"COUTRY_DK":       1,
		"COUNTRY_NO":      2,
		"COUNTRY_DE":      3,
	}
)

func (x CountryCodeType) Enum() *CountryCodeType {
	p := new(CountryCodeType)
	*p = x
	return p
}

func (x CountryCodeType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (CountryCodeType) Descriptor() protoreflect.EnumDescriptor {
	return file_social_proto_enumTypes[0].Descriptor()
}

func (CountryCodeType) Type() protoreflect.EnumType {
	return &file_social_proto_enumTypes[0]
}

func (x CountryCodeType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use CountryCodeType.Descriptor instead.
func (CountryCodeType) EnumDescriptor() ([]byte, []int) {
	return file_social_proto_rawDescGZIP(), []int{0}
}

type Gender int32

const (
	Gender_INVALID_GENDER Gender = 0
	Gender_MALE           Gender = 1
	Gender_FEMALE         Gender = 2
	Gender_OTHER          Gender = 3
)

// Enum value maps for Gender.
var (
	Gender_name = map[int32]string{
		0: "INVALID_GENDER",
		1: "MALE",
		2: "FEMALE",
		3: "OTHER",
	}
	Gender_value = map[string]int32{
		"INVALID_GENDER": 0,
		"MALE":           1,
		"FEMALE":         2,
		"OTHER":          3,
	}
)

func (x Gender) Enum() *Gender {
	p := new(Gender)
	*p = x
	return p
}

func (x Gender) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Gender) Descriptor() protoreflect.EnumDescriptor {
	return file_social_proto_enumTypes[1].Descriptor()
}

func (Gender) Type() protoreflect.EnumType {
	return &file_social_proto_enumTypes[1]
}

func (x Gender) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Gender.Descriptor instead.
func (Gender) EnumDescriptor() ([]byte, []int) {
	return file_social_proto_rawDescGZIP(), []int{1}
}

type VerificationProviderType int32

const (
	VerificationProviderType_INVALID VerificationProviderType = 0
	VerificationProviderType_MIT_ID  VerificationProviderType = 1
)

// Enum value maps for VerificationProviderType.
var (
	VerificationProviderType_name = map[int32]string{
		0: "INVALID",
		1: "MIT_ID",
	}
	VerificationProviderType_value = map[string]int32{
		"INVALID": 0,
		"MIT_ID":  1,
	}
)

func (x VerificationProviderType) Enum() *VerificationProviderType {
	p := new(VerificationProviderType)
	*p = x
	return p
}

func (x VerificationProviderType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (VerificationProviderType) Descriptor() protoreflect.EnumDescriptor {
	return file_social_proto_enumTypes[2].Descriptor()
}

func (VerificationProviderType) Type() protoreflect.EnumType {
	return &file_social_proto_enumTypes[2]
}

func (x VerificationProviderType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use VerificationProviderType.Descriptor instead.
func (VerificationProviderType) EnumDescriptor() ([]byte, []int) {
	return file_social_proto_rawDescGZIP(), []int{2}
}

type VerificationProvider struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Type VerificationProviderType `protobuf:"varint,1,opt,name=type,proto3,enum=Social.VerificationProviderType" json:"type,omitempty"`
	Name string                   `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *VerificationProvider) Reset() {
	*x = VerificationProvider{}
	if protoimpl.UnsafeEnabled {
		mi := &file_social_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *VerificationProvider) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*VerificationProvider) ProtoMessage() {}

func (x *VerificationProvider) ProtoReflect() protoreflect.Message {
	mi := &file_social_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use VerificationProvider.ProtoReflect.Descriptor instead.
func (*VerificationProvider) Descriptor() ([]byte, []int) {
	return file_social_proto_rawDescGZIP(), []int{0}
}

func (x *VerificationProvider) GetType() VerificationProviderType {
	if x != nil {
		return x.Type
	}
	return VerificationProviderType_INVALID
}

func (x *VerificationProvider) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type CountryCode struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Type CountryCodeType `protobuf:"varint,1,opt,name=type,proto3,enum=Social.CountryCodeType" json:"type,omitempty"`
	Name string          `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *CountryCode) Reset() {
	*x = CountryCode{}
	if protoimpl.UnsafeEnabled {
		mi := &file_social_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CountryCode) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CountryCode) ProtoMessage() {}

func (x *CountryCode) ProtoReflect() protoreflect.Message {
	mi := &file_social_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CountryCode.ProtoReflect.Descriptor instead.
func (*CountryCode) Descriptor() ([]byte, []int) {
	return file_social_proto_rawDescGZIP(), []int{1}
}

func (x *CountryCode) GetType() CountryCodeType {
	if x != nil {
		return x.Type
	}
	return CountryCodeType_INVALID_COUNTRY
}

func (x *CountryCode) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

var File_social_proto protoreflect.FileDescriptor

var file_social_proto_rawDesc = []byte{
	0x0a, 0x0c, 0x73, 0x6f, 0x63, 0x69, 0x61, 0x6c, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x06,
	0x53, 0x6f, 0x63, 0x69, 0x61, 0x6c, 0x22, 0x60, 0x0a, 0x14, 0x56, 0x65, 0x72, 0x69, 0x66, 0x69,
	0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x50, 0x72, 0x6f, 0x76, 0x69, 0x64, 0x65, 0x72, 0x12, 0x34,
	0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x20, 0x2e, 0x53,
	0x6f, 0x63, 0x69, 0x61, 0x6c, 0x2e, 0x56, 0x65, 0x72, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x50, 0x72, 0x6f, 0x76, 0x69, 0x64, 0x65, 0x72, 0x54, 0x79, 0x70, 0x65, 0x52, 0x04,
	0x74, 0x79, 0x70, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x22, 0x4e, 0x0a, 0x0b, 0x43, 0x6f, 0x75, 0x6e,
	0x74, 0x72, 0x79, 0x43, 0x6f, 0x64, 0x65, 0x12, 0x2b, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x17, 0x2e, 0x53, 0x6f, 0x63, 0x69, 0x61, 0x6c, 0x2e, 0x43,
	0x6f, 0x75, 0x6e, 0x74, 0x72, 0x79, 0x43, 0x6f, 0x64, 0x65, 0x54, 0x79, 0x70, 0x65, 0x52, 0x04,
	0x74, 0x79, 0x70, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x2a, 0x55, 0x0a, 0x0f, 0x43, 0x6f, 0x75, 0x6e,
	0x74, 0x72, 0x79, 0x43, 0x6f, 0x64, 0x65, 0x54, 0x79, 0x70, 0x65, 0x12, 0x13, 0x0a, 0x0f, 0x49,
	0x4e, 0x56, 0x41, 0x4c, 0x49, 0x44, 0x5f, 0x43, 0x4f, 0x55, 0x4e, 0x54, 0x52, 0x59, 0x10, 0x00,
	0x12, 0x0d, 0x0a, 0x09, 0x43, 0x4f, 0x55, 0x54, 0x52, 0x59, 0x5f, 0x44, 0x4b, 0x10, 0x01, 0x12,
	0x0e, 0x0a, 0x0a, 0x43, 0x4f, 0x55, 0x4e, 0x54, 0x52, 0x59, 0x5f, 0x4e, 0x4f, 0x10, 0x02, 0x12,
	0x0e, 0x0a, 0x0a, 0x43, 0x4f, 0x55, 0x4e, 0x54, 0x52, 0x59, 0x5f, 0x44, 0x45, 0x10, 0x03, 0x2a,
	0x3d, 0x0a, 0x06, 0x47, 0x65, 0x6e, 0x64, 0x65, 0x72, 0x12, 0x12, 0x0a, 0x0e, 0x49, 0x4e, 0x56,
	0x41, 0x4c, 0x49, 0x44, 0x5f, 0x47, 0x45, 0x4e, 0x44, 0x45, 0x52, 0x10, 0x00, 0x12, 0x08, 0x0a,
	0x04, 0x4d, 0x41, 0x4c, 0x45, 0x10, 0x01, 0x12, 0x0a, 0x0a, 0x06, 0x46, 0x45, 0x4d, 0x41, 0x4c,
	0x45, 0x10, 0x02, 0x12, 0x09, 0x0a, 0x05, 0x4f, 0x54, 0x48, 0x45, 0x52, 0x10, 0x03, 0x2a, 0x33,
	0x0a, 0x18, 0x56, 0x65, 0x72, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x50, 0x72,
	0x6f, 0x76, 0x69, 0x64, 0x65, 0x72, 0x54, 0x79, 0x70, 0x65, 0x12, 0x0b, 0x0a, 0x07, 0x49, 0x4e,
	0x56, 0x41, 0x4c, 0x49, 0x44, 0x10, 0x00, 0x12, 0x0a, 0x0a, 0x06, 0x4d, 0x49, 0x54, 0x5f, 0x49,
	0x44, 0x10, 0x01, 0x42, 0x0d, 0x5a, 0x0b, 0x2e, 0x2f, 0x67, 0x6f, 0x5f, 0x73, 0x6f, 0x63, 0x69,
	0x61, 0x6c, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_social_proto_rawDescOnce sync.Once
	file_social_proto_rawDescData = file_social_proto_rawDesc
)

func file_social_proto_rawDescGZIP() []byte {
	file_social_proto_rawDescOnce.Do(func() {
		file_social_proto_rawDescData = protoimpl.X.CompressGZIP(file_social_proto_rawDescData)
	})
	return file_social_proto_rawDescData
}

var file_social_proto_enumTypes = make([]protoimpl.EnumInfo, 3)
var file_social_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_social_proto_goTypes = []interface{}{
	(CountryCodeType)(0),          // 0: Social.CountryCodeType
	(Gender)(0),                   // 1: Social.Gender
	(VerificationProviderType)(0), // 2: Social.VerificationProviderType
	(*VerificationProvider)(nil),  // 3: Social.VerificationProvider
	(*CountryCode)(nil),           // 4: Social.CountryCode
}
var file_social_proto_depIdxs = []int32{
	2, // 0: Social.VerificationProvider.type:type_name -> Social.VerificationProviderType
	0, // 1: Social.CountryCode.type:type_name -> Social.CountryCodeType
	2, // [2:2] is the sub-list for method output_type
	2, // [2:2] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_social_proto_init() }
func file_social_proto_init() {
	if File_social_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_social_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*VerificationProvider); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_social_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CountryCode); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_social_proto_rawDesc,
			NumEnums:      3,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_social_proto_goTypes,
		DependencyIndexes: file_social_proto_depIdxs,
		EnumInfos:         file_social_proto_enumTypes,
		MessageInfos:      file_social_proto_msgTypes,
	}.Build()
	File_social_proto = out.File
	file_social_proto_rawDesc = nil
	file_social_proto_goTypes = nil
	file_social_proto_depIdxs = nil
}
