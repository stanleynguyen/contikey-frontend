export async function serviceReq(fetchProm) {
  try {
    const res = await fetchProm;
    if (res.status === 200) {
      const payload = await res.json();
      return Object.assign({}, { status: 200 }, payload);
    } else {
      const payload = await res.json();
      throw Object.assign({}, { status: res.status }, payload);
    }
  } catch (e) {
    throw { status: 599, message: JSON.stringify(e) };
  }
}
