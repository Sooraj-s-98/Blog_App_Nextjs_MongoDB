import { Avatar } from '@/components/Avatar';
import { Button, ButtonLink } from '@/components/Button';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { fetcher } from '@/lib/fetch';
import { useCurrentUser } from '@/lib/user';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import Container from './Container';
import styles from './Nav.module.css';
import Spacer from './Spacer';
import Wrapper from './Wrapper';
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import mixpanel from 'mixpanel-browser';

const UserMenu = ({ user, mutate }) => {
  const menuRef = useRef();
  const avatarRef = useRef();

  const [visible, setVisible] = useState(false);

  const router = useRouter();
  useEffect(() => {
    mixpanel.init('84bf49a6811632b4257b5f43feb7a6d6', {debug: true}); 
    const onRouteChangeComplete = () => setVisible(false);
    router.events.on('routeChangeComplete', onRouteChangeComplete);
    return () =>
      router.events.off('routeChangeComplete', onRouteChangeComplete);
  });

  useEffect(() => {
    // detect outside click to close menu
    const onMouseDown = (event) => {
      if (
        !menuRef.current.contains(event.target) &&
        !avatarRef.current.contains(event.target)
      ) {
        setVisible(false);
      }
    };
    document.addEventListener('mousedown', onMouseDown);
    return () => {
      document.removeEventListener('mousedown', onMouseDown);
    };
  }, []);

  const onSignOut = useCallback(async () => {
    try {
      await fetcher('/api/auth', {
        method: 'DELETE',
      });
      toast.success('You have been signed out');
      mutate({ user: null });
    } catch (e) {
      toast.error(e.message);
    }
  }, [mutate]);




  return (
    <div className={styles.user}>
      <button
        className={styles.trigger}
        ref={avatarRef}
        onClick={() => setVisible(!visible)}
      >
        <Avatar size={32} username={user.username} url={user.profilePicture} />
      </button>
      <div
        ref={menuRef}
        role="menu"
        aria-hidden={visible}
        className={styles.popover}
      >
        {visible && (
          <div className={styles.menu}>
            <Link passHref href={`/user/${user.username}`}>
              <a className={styles.item}>Profile</a>
            </Link>
            <Link passHref href="/settings">
              <a className={styles.item}>Settings</a>
            </Link>
            {/* <div className={styles.item} style={{ cursor: 'auto' }}>
              <Container alignItems="center">
                <span>Theme</span>
                <Spacer size={0.5} axis="horizontal" />
                <ThemeSwitcher />
              </Container>
            </div> */}
            <button onClick={onSignOut} className={styles.item}>
              Sign out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const Nav = () => {
  const Router = useRouter()
  const contentRef = useRef();
  const { data: { user } = {}, mutate } = useCurrentUser();
  const [options, setOptions] = useState([]);

  const searchPost = async (e, value, reason) => {
    if (e.target.value !== "") {
      try {

        let response = await fetcher('/api/search', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ content: e.target.value }),
        });
        console.log('response', response);
        setOptions(response.post);
      } catch (e) {

      } finally {

      }
    }
  }
  // setTimeout(async () => {
  //   const close = await document.getElementsByClassName(
  //     "MuiAutocomplete-clearIndicator"
  //   )[0];
  //   if(close){
  //   close.addEventListener("click", () => {
  //     Router.push(`/`) 
  //   });
  // }
  // }, 100);


  return (
    <nav className={styles.nav}>
      <Wrapper className={styles.wrapper}>
        <Container
          className={styles.content}
          alignItems="center"
          justifyContent="space-between"
        >
          <Link href="/">
            <a className={styles.logo}>M-dev</a>
          </Link>
          <Container>

            <Autocomplete
              freeSolo
              disableClearable
              onChange={(event, value) => {
                Router.push(`/search/${value}`)
              }}
              options={options ? options.map((obj) => obj.content) : []}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search "
                  inputRef={contentRef}
                  onChange={(e) => searchPost(e)}
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                  }}
                />
              )}
            />
            {/* <Container
          className={styles.content}
          alignItems="center"
          justifyContent="space-between"
        >
          <form onSubmit={searchPost}>
      <input   ref={contentRef} />
      <button >search</button>
      </form>
      </Container> */}
            {user ? (
              <>
                <UserMenu user={user} mutate={mutate} />
              </>
            ) : (
              <>
                <Link passHref href="/login">
                  <ButtonLink
                    size="small"
                    type="success"
                    variant="ghost"
                    color="link"
                  >
                    Log in
                  </ButtonLink>
                </Link>
                <Spacer axis="horizontal" size={0.25} />
                <Link passHref href="/sign-up">
                  <Button size="small" type="success">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </Container>
        </Container>
      </Wrapper>
    </nav>
  );
};

export default Nav;
