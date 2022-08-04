import { httpMock } from "shared/helpers/http-mocks";

export async function getStudents() {
  try {
    await httpMock({ randomFailure: true });
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
