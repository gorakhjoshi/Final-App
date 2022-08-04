import { httpMock } from "shared/helpers/http-mock";

export async function saveActiveRoll() {
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
