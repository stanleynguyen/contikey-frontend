// standard handing of auth error 401
// this handler will attempt to refresh the session
// if succeed will retry to execute the service func inside dispatchRefresh
// otherwise it will throw the error up to caller
// other errors apart from auth error will also be thrown
export async function withAuth(serviceFunc, dispatchRefresh) {
  try {
    return await serviceFunc();
  } catch (e) {
    if (e.status === 401) {
      dispatchRefresh();
    } else {
      throw e;
    }
  }
}
