package camping.appbackend.oauth.domain.entity;


import camping.appbackend.domain.user.entity.User;
import camping.appbackend.domain.user.entity.type.SocialType;
import camping.appbackend.domain.user.entity.type.UserRoleType;
import java.util.Collection;
import java.util.Collections;
import java.util.Map;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.oidc.OidcIdToken;
import org.springframework.security.oauth2.core.oidc.OidcUserInfo;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.security.oauth2.core.user.OAuth2User;

@Getter
@Setter
@AllArgsConstructor
@RequiredArgsConstructor
public class UserPrincipal implements OAuth2User, UserDetails, OidcUser {

    private final String userEmail;
    private final String userNickname;
    private final String userPassword;
    private final SocialType socialType;
    private final UserRoleType userRoleType;
    private final Collection<GrantedAuthority> authorities;
    private Map<String, Object> attributes;

    @Override
    public Map<String, Object> getAttributes() {
        return attributes;
    }

    //계정의 권한 목록을 리턴
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    //계정의 비밀번호를 리턴
    @Override
    public String getPassword() {
        return null;
    }

    public static UserPrincipal create(User user) {
        return new UserPrincipal(
                user.getNickName(),
                user.getEmail(),
                "",
                user.getSocialType(),
                user.getUserRoleType(),
                Collections.singletonList(new SimpleGrantedAuthority(user.getUserRoleType().getKey()))
        );
    }

    //계정의 고유한 값을 리턴 (DB PK값, 중복이 없는 이메일 값 등)
    @Override
    public String getUsername() {
        return userEmail;
    }

    //계정의 만료 여부 리턴
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    //계정의 잠김 여부 리턴
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    //계정의 비밀번호 만료여부 리턴
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    //계정의 활성화 여부 리턴
    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public Map<String, Object> getClaims() {
        return null;
    }

    @Override
    public OidcUserInfo getUserInfo() {
        return null;
    }

    @Override
    public OidcIdToken getIdToken() {
        return null;
    }

    //계정의 닉네임을 리턴
    @Override
    public String getName() {
        return userNickname;
    }

    public static UserPrincipal create(User user, Map<String, Object> attributes) {
        UserPrincipal userPrincipal = create(user);
        userPrincipal.setAttributes(attributes);

        return userPrincipal;
    }
}
