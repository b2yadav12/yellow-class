const config = {
    IsLocal: process.env.NODE_ENV === 'local',
    IsProd: process.env.NODE_ENV === 'prod',
    port: process.env.port || '3000'
}
export default config;