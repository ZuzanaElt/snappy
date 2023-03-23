import { Account } from "../components/auth/Account";
import { Auth } from "../components/auth/Auth";

function AccountDisplay({ session }) {
  return (
    <>
      {!session ? (
        <Auth />
      ) : (
        <Account key={session.user.id} session={session} />
      )}
    </>
  );
}
export default AccountDisplay;
