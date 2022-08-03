import { httpMocks } from "shared/helpers/http-mocks";

export async function saveActivity() {
  try {
    await httpMocks({ randomFailure: true });
    return {
      success: true,
    };
  } catch (error) {
    return {
      error: {},
    };
  }
}
