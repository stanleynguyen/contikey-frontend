export async function serviceReq(fetchProm) {
  try {
    const res = await fetchProm;
    if (res.status === 200 || res.status === 201) {
      const payload = await res.json();
      return Object.assign({}, { status: res.status }, payload);
    } else {
      const payload = await res.json();
      throw Object.assign({}, { status: res.status }, payload);
    }
  } catch (e) {
    if (e.status) throw e;
    throw { status: 599, message: JSON.stringify(e) };
  }
}
