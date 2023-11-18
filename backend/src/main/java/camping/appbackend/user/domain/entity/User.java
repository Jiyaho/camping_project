package camping.appbackend.user.domain.entity;

import camping.appbackend.user.domain.entity.type.SocialType;
import camping.appbackend.user.domain.entity.type.UserRoleType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Comment;
import org.hibernate.annotations.DynamicInsert;

@Getter
@DynamicInsert
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;

    @Comment("이름")
    @Column(length = 30)
    private String name;

    @Comment("생년월일")
    @Column(length = 6)
    private String birthday;

    @Comment("휴대폰 번호")
    @Column(length = 20)
    private String phoneNumber;

    @Comment("닉네임")
    @Column(length = 30)
    private String nickName;

    @Comment("소셜 가입 경로")
    @Enumerated(EnumType.STRING)
    @Column(length = 30)
    private SocialType socialType;

    @Comment("권한")
    @Enumerated(EnumType.STRING)
    @Column(length = 30)
    private UserRoleType userRoleType;

    @Comment("주소")
    @Column(length = 100)
    private String address;

    @Comment("이메일")
    @Column(length = 100, nullable = false)
    private String email;

    @Comment("탈퇴여부")
    @Column(length = 1, nullable = false)
    private boolean isRemove;

    @Comment("프로필 사진")
    @Lob
    private String profileImage;


    @Builder
    public User(Long id, String name, String birthday, String phoneNumber, String nickName, SocialType socialType,
            String address, UserRoleType userRoleType, String email, boolean isRemove, String profileImage) {
        this.id = id;
        this.name = name;
        this.birthday = birthday;
        this.phoneNumber = phoneNumber;
        this.nickName = nickName;
        this.socialType = socialType;
        this.address = address;
        this.userRoleType = userRoleType;
        this.email = email;
        this.isRemove = isRemove;
        this.profileImage = profileImage;
    }


}
