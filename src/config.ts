export default (): any => {
    const nodeEnv : string = process.env.NODE_ENV ?? 'default';
    return require(envPath(nodeEnv.trim()));
}

const envPath = (env: string) => `./config/${env}.json`;