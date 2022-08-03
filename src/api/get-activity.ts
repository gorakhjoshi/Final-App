import { httpMocks } from "shared/helpers/http-mocks";

export async function getActivities() {
  await httpMocks({ randomFailure: true });
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
