import { httpMocks } from "shared/helpers/http-mocks";

export async function getStudents() {
  try {
    await httpMocks({ randomFailure: true });
    return {
      success: true,
      students: {},
    };
  } catch (error) {
    return {
      success: false,
      error: {},
    };
  }
}
