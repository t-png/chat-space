# README




## membersテーブル
|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

##messagesテーブル
|member|user_id|text|image|
|------|-------|----|-----|
|image|text||
|text|text||
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

##groupsテーブル
|id|member|user_id|text|image|
|--|------|-------|----|-----|
|image|text||
|text|text||
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## usersテーブル
|id|e-mail|password|nickname|
|--|------|--------|--------|
|password|string|null: false|
|nickname|string|null: false|
|nickname|string|index: true|
### Association
- has_many :tweets
- has_many :comments

## groups_usersテーブル
|id|
|--|
|id|references|null: false, foreign_key: true|
### Association
- has_many :users
- has_many :groups


