import { userAtom } from '@/atoms/user';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { ProfileBox } from './Profile.styles';

function Profile() {
  const userData = useRecoilValue(userAtom);

  return (
    <>
      {userData.isAuth ? (
        <ProfileBox>
          <Image src={userData?.user.profile_image} alt="profile_image" width={50} height={50} />
        </ProfileBox>
      ) : (
        <ProfileBox>
          <span>👤</span>
        </ProfileBox>
      )}
    </>
  );
}
export default Profile;
