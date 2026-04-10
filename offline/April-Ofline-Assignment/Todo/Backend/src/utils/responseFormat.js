export function respond(res, OK, status, data, error) {
  res.json({OK, status, data, error});
}