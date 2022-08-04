import { httpMock } from "shared/helpers/http-mock";

export async function getActivities() {
  await httpMock({ randomFailure: true });
  try {
    return {
      success: true,
      activity: {},
    };
  } catch (error) {
    return {
      success: false,
      error: {},
    };
  }
}
