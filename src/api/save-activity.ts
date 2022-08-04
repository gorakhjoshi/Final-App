import { httpMock } from "shared/helpers/http-mocks";

export async function saveActivity() {
  try {
    await httpMock({ randomFailure: true });
    return {
      success: true,
    };
  } catch (error) {
    return {
      error: {},
    };
  }
}
