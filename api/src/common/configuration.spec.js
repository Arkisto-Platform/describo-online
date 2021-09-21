import "regenerator-runtime";
import { loadConfiguration, filterPrivateInformation } from "./configuration";

describe("Test loading the configuration", () => {
    test("it should be able to load the default configuration for the environment", async () => {
        let configuration = await loadConfiguration();
        expect(configuration).toHaveProperty("api");
        expect(configuration.api).toHaveProperty("authentication");
    });
    test("it should be able to filter private fields from the configuration", async () => {
        let configuration = await loadConfiguration();
        configuration = filterPrivateInformation({ configuration });
        for (let service of Object.keys(configuration.api.authentication)) {
            expect(configuration.api.authentication[service]).not.toHaveProperty("clientSecret");
        }
    });
});
