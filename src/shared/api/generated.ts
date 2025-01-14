/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * SchoolGO API
 * OpenAPI spec version: v1
 */
import { createInstance } from './api-instance';
import type { BodyType } from './api-instance';
export type DeleteApiVideoLectureGroupsRemoveVideoLectureParams = {
/**
 * Id of group
 */
groupId: string;
/**
 * Id of videoLecture
 */
videoLectureId: string;
};

export type PatchApiVideoLectureGroupsAddVideoLectureParams = {
/**
 * Id of group
 */
groupId: string;
};

export type GetApiVideoLectureGroupsParams = {
groupId?: string;
};

export type PostApiUsersAccountChangePasswordParams = {
/**
 * user's old password
 */
oldPassword: string;
/**
 * user's new password
 */
newPassword: string;
/**
 * user's new repeated password
 */
repeatedNewPassword: string;
};

export type PostApiUsersAccountIsResetTokenExpiredParams = {
/**
 * token to check whether it is expired or not
 */
token: string;
};

export type PostApiUsersAccountResetPasswordParams = {
/**
 * token to reset password
 */
token: string;
/**
 * user's password
 */
password: string;
};

export type PostApiUsersAccountForgotPasswordParams = {
/**
 * user's email
 */
email: string;
};

export type PostApiRegisterApproveTrainerParams = {
/**
 * Id of trainer
 */
trainerId: string;
};

export type GetApiMeetingsGetAllStudentsFromMeetingParams = {
/**
 * id of meeting
 */
meetingId?: string;
};

export type DeleteApiMeetingsRemoveStudentFromMeetingParams = {
/**
 * id of meeting
 */
meetingId: string;
/**
 * id of student
 */
studentId: string;
};

export type PostApiMeetingsAddStudentToMeetingParams = {
/**
 * id of meeting
 */
meetingId: string;
/**
 * id of student
 */
studentId: string;
};

export type GetApiGroupsGetAllStudentsFromGroupParams = {
/**
 * id of group
 */
groupId?: string;
};

export type DeleteApiGroupsRemoveStudentFromGroupParams = {
/**
 * id of group
 */
groupId: string;
/**
 * id of student
 */
studentId: string;
};

export type PostApiGroupsAddStudentToGroupParams = {
/**
 * id of group
 */
groupId: string;
/**
 * id of student
 */
studentId: string;
};

export type DeleteApiFileGroupsRemoveFileParams = {
/**
 * Id of group
 */
groupId: string;
/**
 * Id of file
 */
fileId: string;
};

export type PostApiFileGroupsAddFileBody = {
  file: Blob;
};

export type PostApiFileGroupsAddFileParams = {
/**
 * Id of group
 */
groupId: string;
};

export type GetApiFileGroupsParams = {
groupId?: string;
};

/**
 * Get video lecture group
 */
export interface DTOVideoLectureGroupDtoGet {
  /**
   * Id of the video lecture group
   * @nullable
   */
  id?: string | null;
  /**
   * Name of the video lecture group
   * @minLength 2
   * @maxLength 100
   * @pattern ^[А-ЯЁ][а-яё0-9]*([-'][А-ЯЁ][а-яё0-9]*)?$
   */
  name: string;
}

/**
 * Edit video lecture group
 */
export interface DTOVideoLectureGroupDtoEdit {
  /**
   * Id of the video lecture group
   * @nullable
   */
  id?: string | null;
  /**
   * Name of the video lecture group
   * @minLength 2
   * @maxLength 100
   * @pattern ^[А-ЯЁ][а-яё0-9]*([-'][А-ЯЁ][а-яё0-9]*)?$
   */
  name: string;
}

/**
 * Add video lecture group
 */
export interface DTOVideoLectureGroupDtoAdd {
  /**
   * Name of the video lecture group
   * @minLength 2
   * @maxLength 100
   * @pattern ^[А-ЯЁ][а-яё0-9]*([-'][А-ЯЁ][а-яё0-9]*)?$
   */
  name: string;
}

/**
 * Add video lecture
 */
export interface DTOVideoLectureDtoAdd {
  /**
   * Title of the video lecture
   * @minLength 2
   * @maxLength 100
   * @pattern ^[А-ЯЁ][а-яё0-9]*([-'][А-ЯЁ][а-яё0-9]*)?$
   */
  title: string;
  /** URL of the video lecture */
  url: string;
}

/**
 * Get object
 */
export interface DTOTrainerDtoGet {
  /**
   * Club
   * @minLength 2
   * @maxLength 70
   * @nullable
   * @pattern ^[\p{IsCyrillic}0-9\s]+$
   */
  club?: string | null;
  /**
   * Email
   * @minLength 2
   * @maxLength 150
   * @pattern ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
   */
  email: string;
  /**
   * Firstname
   * @minLength 2
   * @maxLength 64
   * @pattern ^[А-ЯЁ][а-яё]*([-'][А-ЯЁ][а-яё]*)?$
   */
  firstName: string;
  /**
   * Id
   * @nullable
   */
  id?: string | null;
  /**
   * Lastname
   * @minLength 2
   * @maxLength 64
   * @pattern ^[А-ЯЁ][а-яё]*([-'][А-ЯЁ][а-яё]*)?$
   */
  lastName: string;
  /**
   * Phone number
   * @minLength 10
   * @maxLength 10
   */
  phoneNumber: string;
  /**
   * Rank
   * @minLength 2
   * @maxLength 70
   * @nullable
   * @pattern ^[\p{IsCyrillic}0-9\s]+$
   */
  rank?: string | null;
}

export interface DTOTrainerDtoEdit {
  /**
   * Club
   * @minLength 2
   * @maxLength 70
   * @nullable
   * @pattern ^[\p{IsCyrillic}0-9\s]+$
   */
  club?: string | null;
  /**
   * Email
   * @minLength 2
   * @maxLength 150
   * @pattern ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
   */
  email: string;
  /**
   * Firstname
   * @minLength 2
   * @maxLength 64
   * @pattern ^[А-ЯЁ][а-яё]*([-'][А-ЯЁ][а-яё]*)?$
   */
  firstName: string;
  /**
   * Id
   * @nullable
   */
  id?: string | null;
  /**
   * Lastname
   * @minLength 2
   * @maxLength 64
   * @pattern ^[А-ЯЁ][а-яё]*([-'][А-ЯЁ][а-яё]*)?$
   */
  lastName: string;
  /**
   * Phone number
   * @minLength 10
   * @maxLength 10
   */
  phoneNumber: string;
  /**
   * Rank
   * @minLength 2
   * @maxLength 70
   * @nullable
   * @pattern ^[\p{IsCyrillic}0-9\s]+$
   */
  rank?: string | null;
}

/**
 * Get object
 */
export interface DTOStudentDtoGet {
  /**
   * Email
   * @minLength 2
   * @maxLength 150
   * @pattern ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
   */
  email: string;
  /**
   * Firstname
   * @minLength 2
   * @maxLength 70
   * @pattern ^[А-ЯЁ][а-яё]*([-'][А-ЯЁ][а-яё]*)?$
   */
  firstName: string;
  /**
   * Id
   * @nullable
   */
  id?: string | null;
  /**
   * Lastname
   * @minLength 2
   * @maxLength 70
   * @pattern ^[А-ЯЁ][а-яё]*([-'][А-ЯЁ][а-яё]*)?$
   */
  lastName: string;
}

/**
 * Edit object
 */
export interface DTOStudentDtoEdit {
  /**
   * Email
   * @minLength 2
   * @maxLength 150
   * @pattern ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
   */
  email: string;
  /**
   * Firstname
   * @minLength 2
   * @maxLength 70
   * @pattern ^[А-ЯЁ][а-яё]*([-'][А-ЯЁ][а-яё]*)?$
   */
  firstName: string;
  /**
   * Id
   * @nullable
   */
  id?: string | null;
  /**
   * Lastname
   * @minLength 2
   * @maxLength 70
   * @pattern ^[А-ЯЁ][а-яё]*([-'][А-ЯЁ][а-яё]*)?$
   */
  lastName: string;
}

/**
 * Add object
 */
export interface DTOStudentDtoAdd {
  /**
   * Email
   * @minLength 2
   * @maxLength 150
   * @pattern ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
   */
  email: string;
  /**
   * Firstname
   * @minLength 2
   * @maxLength 70
   * @pattern ^[А-ЯЁ][а-яё]*([-'][А-ЯЁ][а-яё]*)?$
   */
  firstName: string;
  /**
   * Lastname
   * @minLength 2
   * @maxLength 70
   * @pattern ^[А-ЯЁ][а-яё]*([-'][А-ЯЁ][а-яё]*)?$
   */
  lastName: string;
}

export interface DTORegisterDtoAddTrainer {
  /**
   * @minLength 2
   * @maxLength 70
   * @nullable
   * @pattern ^[\p{IsCyrillic}0-9\s]+$
   */
  club?: string | null;
  /**
   * @minLength 2
   * @maxLength 150
   * @pattern ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
   */
  email: string;
  /**
   * @minLength 2
   * @maxLength 70
   * @pattern ^[А-ЯЁ][а-яё]*([-'][А-ЯЁ][а-яё]*)?$
   */
  firstName: string;
  /**
   * @minLength 2
   * @maxLength 70
   * @pattern ^[А-ЯЁ][а-яё]*([-'][А-ЯЁ][а-яё]*)?$
   */
  lastName: string;
  /**
   * @minLength 10
   * @maxLength 10
   */
  phoneNumber: string;
  /**
   * @minLength 2
   * @maxLength 70
   * @nullable
   * @pattern ^[\p{IsCyrillic}0-9\s]+$
   */
  rank?: string | null;
}

/**
 * DTO for getting meeting information
 */
export interface DTOMeetingDtoGet {
  /**
   * Detailed description of the meeting
   * @maxLength 200
   * @nullable
   */
  description?: string | null;
  /** Ending time of the meeting. */
  endTime: string;
  /** Identifier */
  id: string;
  /**
   * Meeting URL for google meet
   * @nullable
   */
  meetingUrl?: string | null;
  /**
   * The end of recurrence
   * @nullable
   */
  recurrenceEnd?: string | null;
  recurrencePattern?: CommonEnumsRecurrencePattern;
  /** Starting time of the meeting */
  startTime: string;
  /**
   * Meeting title
   * @maxLength 100
   */
  title: string;
}

/**
 * Editing an existing meeting
 */
export interface DTOMeetingDtoEdit {
  /**
   * Detailed description of the meeting
   * @maxLength 200
   * @nullable
   */
  description?: string | null;
  /** Ending time of the meeting. */
  endTime: string;
  /** Identifier */
  id: string;
  /**
   * Meeting URL for google meet
   * @nullable
   */
  meetingUrl?: string | null;
  /**
   * The end of recurrence
   * @nullable
   */
  recurrenceEnd?: string | null;
  recurrencePattern?: CommonEnumsRecurrencePattern;
  /** Starting time of the meeting */
  startTime: string;
  /**
   * Meeting title
   * @maxLength 100
   */
  title: string;
}

/**
 * Adding a new meeting
 */
export interface DTOMeetingDtoAdd {
  /**
   * Detailed description of the meeting
   * @maxLength 200
   * @nullable
   */
  description?: string | null;
  /** Ending time of the meeting. */
  endTime: string;
  /**
   * Meeting URL for google meet
   * @nullable
   */
  meetingUrl?: string | null;
  /**
   * The end of recurrence
   * @nullable
   */
  recurrenceEnd?: string | null;
  recurrencePattern?: CommonEnumsRecurrencePattern;
  /** Starting time of the meeting */
  startTime: string;
  /**
   * Meeting title
   * @maxLength 100
   */
  title: string;
}

/**
 * Get object
 */
export interface DTOGroupDtoGet {
  /** Date of creation */
  createdDateTime?: string;
  /**
   * Description
   * @nullable
   */
  description?: string | null;
  /**
   * Last change date
   * @nullable
   */
  editedDateTime?: string | null;
  /** Identifier */
  id: string;
  /**
   * Name
   * @nullable
   */
  name?: string | null;
}

/**
 * Edit object
 */
export interface DTOGroupDtoEdit {
  /**
   * Description
   * @nullable
   */
  description?: string | null;
  /** Identifier */
  id: string;
  /**
   * Group Name
   * @maxLength 64
   */
  name: string;
}

/**
 * Add object
 */
export interface DTOGroupDtoAdd {
  /**
   * Description
   * @nullable
   */
  description?: string | null;
  /**
   * Group Name
   * @maxLength 64
   */
  name: string;
}

/**
 * Get file group
 */
export interface DTOFileGroupDtoGet {
  /**
   * Id of the file group
   * @nullable
   */
  id?: string | null;
  /**
   * Name of the File group
   * @minLength 2
   * @maxLength 100
   */
  name: string;
}

/**
 * Edit file group
 */
export interface DTOFileGroupDtoEdit {
  /**
   * Id of the file group
   * @nullable
   */
  id?: string | null;
  /**
   * Name of the File group
   * @minLength 2
   * @maxLength 100
   */
  name: string;
}

/**
 * Add file group
 */
export interface DTOFileGroupDtoAdd {
  /**
   * Name of the File group
   * @minLength 2
   * @maxLength 100
   */
  name: string;
}

/**
 * @nullable
 */
export type DTOBaseBadRequestDtoErrors = {[key: string]: string[]} | null;

export interface DTOBaseBadRequestDto {
  /** @nullable */
  devCode?: number | null;
  /** @nullable */
  errors?: DTOBaseBadRequestDtoErrors;
}

export interface DTOAuthDtoResponse {
  /** @nullable */
  accessToken?: string | null;
  accessTokenExpireDate?: string;
  /** @nullable */
  refreshToken?: string | null;
  refreshTokenExpireDate?: string;
  /** @nullable */
  roleNames?: string[] | null;
  /** @nullable */
  userName?: string | null;
}

export interface DTOAuthDtoRefresh {
  refreshToken: string;
}

export interface DTOAuthDtoLogin {
  password: string;
  userName: string;
}

export type CommonEnumsRecurrencePattern = typeof CommonEnumsRecurrencePattern[keyof typeof CommonEnumsRecurrencePattern];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CommonEnumsRecurrencePattern = {
  NUMBER_0: 0,
  NUMBER_1: 1,
  NUMBER_2: 2,
  NUMBER_3: 3,
  NUMBER_4: 4,
} as const;

export interface BLLExtensionsEnumResult {
  /** @nullable */
  description?: string | null;
  id?: number;
  /** @nullable */
  name?: string | null;
}




type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];


  /**
 * @summary Get access and refresh tokens by login and password
 */
export const postApiAuthAccess = (
    dTOAuthDtoLogin: BodyType<DTOAuthDtoLogin>,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<DTOAuthDtoResponse>(
      {url: `/api/Auth/Access`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: dTOAuthDtoLogin
    },
      options);
    }
  
/**
 * @summary Get access and refresh tokens by old refresh token
 */
export const postApiAuthRefresh = (
    dTOAuthDtoRefresh: BodyType<DTOAuthDtoRefresh>,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<DTOAuthDtoResponse>(
      {url: `/api/Auth/Refresh`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: dTOAuthDtoRefresh
    },
      options);
    }
  
/**
 * Roles: Allow anonymous
 * @summary Get list of roles type enums
 */
export const getApiEnumsRolesTypeEnum = (
    
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<BLLExtensionsEnumResult[]>(
      {url: `/api/Enums/RolesTypeEnum`, method: 'GET'
    },
      options);
    }
  
/**
 * Roles: Allow anonymous
 * @summary Get list of reccurence patterns type enums
 */
export const getApiEnumsReccurencePatternsTypeEnum = (
    
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<BLLExtensionsEnumResult[]>(
      {url: `/api/Enums/ReccurencePatternsTypeEnum`, method: 'GET'
    },
      options);
    }
  
/**
 * @summary Create File Group
 */
export const postApiFileGroups = (
    dTOFileGroupDtoAdd: BodyType<DTOFileGroupDtoAdd>,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<string>(
      {url: `/api/FileGroups`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: dTOFileGroupDtoAdd
    },
      options);
    }
  
/**
 * @summary Edit File Group
 */
export const putApiFileGroups = (
    dTOFileGroupDtoEdit: BodyType<DTOFileGroupDtoEdit>,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<void>(
      {url: `/api/FileGroups`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: dTOFileGroupDtoEdit
    },
      options);
    }
  
/**
 * @summary Get all File Groups
 */
export const getApiFileGroups = (
    params?: GetApiFileGroupsParams,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<DTOFileGroupDtoGet[]>(
      {url: `/api/FileGroups`, method: 'GET',
        params
    },
      options);
    }
  
/**
 * @summary Get File Group by id
 */
export const getApiFileGroupsId = (
    id: string,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<DTOFileGroupDtoGet>(
      {url: `/api/FileGroups/${id}`, method: 'GET'
    },
      options);
    }
  
/**
 * @summary Delete File Group by id
 */
export const deleteApiFileGroupsId = (
    id: string,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<void>(
      {url: `/api/FileGroups/${id}`, method: 'DELETE'
    },
      options);
    }
  
/**
 * @summary Add File to File Group
 */
export const postApiFileGroupsAddFile = (
    postApiFileGroupsAddFileBody: BodyType<PostApiFileGroupsAddFileBody>,
    params: PostApiFileGroupsAddFileParams,
 options?: SecondParameter<typeof createInstance>,) => {const formData = new FormData();
formData.append('file', postApiFileGroupsAddFileBody.file)

      return createInstance<string>(
      {url: `/api/FileGroups/AddFile`, method: 'POST',
      headers: {'Content-Type': 'multipart/form-data', },
       data: formData,
        params
    },
      options);
    }
  
/**
 * @summary Delete File from File Group
 */
export const deleteApiFileGroupsRemoveFile = (
    params: DeleteApiFileGroupsRemoveFileParams,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<void>(
      {url: `/api/FileGroups/RemoveFile`, method: 'DELETE',
        params
    },
      options);
    }
  
/**
 * @summary Add group
 */
export const postApiGroups = (
    dTOGroupDtoAdd: BodyType<DTOGroupDtoAdd>,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<string>(
      {url: `/api/Groups`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: dTOGroupDtoAdd
    },
      options);
    }
  
/**
 * @summary Edit group
 */
export const putApiGroups = (
    dTOGroupDtoEdit: BodyType<DTOGroupDtoEdit>,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<void>(
      {url: `/api/Groups`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: dTOGroupDtoEdit
    },
      options);
    }
  
/**
 * @summary Get all groups
 */
export const getApiGroups = (
    
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<DTOGroupDtoGet[]>(
      {url: `/api/Groups`, method: 'GET'
    },
      options);
    }
  
/**
 * @summary Get group by id
 */
export const getApiGroupsId = (
    id: string,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<DTOGroupDtoGet>(
      {url: `/api/Groups/${id}`, method: 'GET'
    },
      options);
    }
  
/**
 * @summary Delete group by id
 */
export const deleteApiGroupsId = (
    id: string,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<void>(
      {url: `/api/Groups/${id}`, method: 'DELETE'
    },
      options);
    }
  
/**
 * @summary Add student to group
 */
export const postApiGroupsAddStudentToGroup = (
    params: PostApiGroupsAddStudentToGroupParams,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<string>(
      {url: `/api/Groups/AddStudentToGroup`, method: 'POST',
        params
    },
      options);
    }
  
/**
 * @summary Delete student from group
 */
export const deleteApiGroupsRemoveStudentFromGroup = (
    params: DeleteApiGroupsRemoveStudentFromGroupParams,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<void>(
      {url: `/api/Groups/RemoveStudentFromGroup`, method: 'DELETE',
        params
    },
      options);
    }
  
/**
 * @summary Get all students from group
 */
export const getApiGroupsGetAllStudentsFromGroup = (
    params?: GetApiGroupsGetAllStudentsFromGroupParams,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<DTOStudentDtoGet[]>(
      {url: `/api/Groups/GetAllStudentsFromGroup`, method: 'GET',
        params
    },
      options);
    }
  
/**
 * @summary Add meeting
 */
export const postApiMeetings = (
    dTOMeetingDtoAdd: BodyType<DTOMeetingDtoAdd>,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<string>(
      {url: `/api/Meetings`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: dTOMeetingDtoAdd
    },
      options);
    }
  
/**
 * @summary Edit meeting
 */
export const putApiMeetings = (
    dTOMeetingDtoEdit: BodyType<DTOMeetingDtoEdit>,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<void>(
      {url: `/api/Meetings`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: dTOMeetingDtoEdit
    },
      options);
    }
  
/**
 * @summary Get all meetings
 */
export const getApiMeetings = (
    
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<DTOMeetingDtoGet[]>(
      {url: `/api/Meetings`, method: 'GET'
    },
      options);
    }
  
/**
 * @summary Get meeting by id
 */
export const getApiMeetingsId = (
    id: string,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<DTOMeetingDtoGet>(
      {url: `/api/Meetings/${id}`, method: 'GET'
    },
      options);
    }
  
/**
 * @summary Delete meeting by id
 */
export const deleteApiMeetingsId = (
    id: string,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<void>(
      {url: `/api/Meetings/${id}`, method: 'DELETE'
    },
      options);
    }
  
/**
 * @summary Add student to meeting
 */
export const postApiMeetingsAddStudentToMeeting = (
    params: PostApiMeetingsAddStudentToMeetingParams,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<string>(
      {url: `/api/Meetings/AddStudentToMeeting`, method: 'POST',
        params
    },
      options);
    }
  
/**
 * @summary Delete student from meeting
 */
export const deleteApiMeetingsRemoveStudentFromMeeting = (
    params: DeleteApiMeetingsRemoveStudentFromMeetingParams,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<void>(
      {url: `/api/Meetings/RemoveStudentFromMeeting`, method: 'DELETE',
        params
    },
      options);
    }
  
/**
 * @summary Get all students from meeting
 */
export const getApiMeetingsGetAllStudentsFromMeeting = (
    params?: GetApiMeetingsGetAllStudentsFromMeetingParams,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<DTOStudentDtoGet[]>(
      {url: `/api/Meetings/GetAllStudentsFromMeeting`, method: 'GET',
        params
    },
      options);
    }
  
/**
 * @summary Register a new trainer
 */
export const postApiRegisterRegisterTrainer = (
    dTORegisterDtoAddTrainer: BodyType<DTORegisterDtoAddTrainer>,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<string>(
      {url: `/api/Register/RegisterTrainer`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: dTORegisterDtoAddTrainer
    },
      options);
    }
  
/**
 * @summary Approve trainer
 */
export const postApiRegisterApproveTrainer = (
    params: PostApiRegisterApproveTrainerParams,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<void>(
      {url: `/api/Register/ApproveTrainer`, method: 'POST',
        params
    },
      options);
    }
  
/**
 * @summary Add student
 */
export const postApiStudents = (
    dTOStudentDtoAdd: BodyType<DTOStudentDtoAdd>,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<string>(
      {url: `/api/Students`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: dTOStudentDtoAdd
    },
      options);
    }
  
/**
 * @summary Edit student
 */
export const putApiStudents = (
    dTOStudentDtoEdit: BodyType<DTOStudentDtoEdit>,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<void>(
      {url: `/api/Students`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: dTOStudentDtoEdit
    },
      options);
    }
  
/**
 * @summary Get all students
 */
export const getApiStudents = (
    
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<DTOStudentDtoGet[]>(
      {url: `/api/Students`, method: 'GET'
    },
      options);
    }
  
/**
 * @summary Get student by id
 */
export const getApiStudentsId = (
    id: string,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<DTOStudentDtoGet>(
      {url: `/api/Students/${id}`, method: 'GET'
    },
      options);
    }
  
/**
 * @summary Delete student by id
 */
export const deleteApiStudentsId = (
    id: string,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<void>(
      {url: `/api/Students/${id}`, method: 'DELETE'
    },
      options);
    }
  
/**
 * @summary Get Trainer by id
 */
export const getApiTrainersId = (
    id: string,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<DTOTrainerDtoGet>(
      {url: `/api/Trainers/${id}`, method: 'GET'
    },
      options);
    }
  
/**
 * @summary Delete Trainer by id
 */
export const deleteApiTrainersId = (
    id: string,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<void>(
      {url: `/api/Trainers/${id}`, method: 'DELETE'
    },
      options);
    }
  
/**
 * @summary Edit Trainer
 */
export const putApiTrainers = (
    dTOTrainerDtoEdit: BodyType<DTOTrainerDtoEdit>,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<void>(
      {url: `/api/Trainers`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: dTOTrainerDtoEdit
    },
      options);
    }
  
/**
 * @summary Get all Trainers
 */
export const getApiTrainers = (
    
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<DTOTrainerDtoGet[]>(
      {url: `/api/Trainers`, method: 'GET'
    },
      options);
    }
  
/**
 * @summary Forgot Password
 */
export const postApiUsersAccountForgotPassword = (
    params: PostApiUsersAccountForgotPasswordParams,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<void>(
      {url: `/api/UsersAccount/ForgotPassword`, method: 'POST',
        params
    },
      options);
    }
  
/**
 * @summary Reset Password
 */
export const postApiUsersAccountResetPassword = (
    params: PostApiUsersAccountResetPasswordParams,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<void>(
      {url: `/api/UsersAccount/ResetPassword`, method: 'POST',
        params
    },
      options);
    }
  
/**
 * @summary IsResetTokenExpired
 */
export const postApiUsersAccountIsResetTokenExpired = (
    params: PostApiUsersAccountIsResetTokenExpiredParams,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<boolean>(
      {url: `/api/UsersAccount/IsResetTokenExpired`, method: 'POST',
        params
    },
      options);
    }
  
/**
 * @summary Change Password
 */
export const postApiUsersAccountChangePassword = (
    params: PostApiUsersAccountChangePasswordParams,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<void>(
      {url: `/api/UsersAccount/ChangePassword`, method: 'POST',
        params
    },
      options);
    }
  
/**
 * @summary Create Video Lecture Group
 */
export const postApiVideoLectureGroups = (
    dTOVideoLectureGroupDtoAdd: BodyType<DTOVideoLectureGroupDtoAdd>,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<string>(
      {url: `/api/VideoLectureGroups`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: dTOVideoLectureGroupDtoAdd
    },
      options);
    }
  
/**
 * @summary Edit Video Lecture Group
 */
export const putApiVideoLectureGroups = (
    dTOVideoLectureGroupDtoEdit: BodyType<DTOVideoLectureGroupDtoEdit>,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<void>(
      {url: `/api/VideoLectureGroups`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: dTOVideoLectureGroupDtoEdit
    },
      options);
    }
  
/**
 * @summary Get all Video Lecture Groups
 */
export const getApiVideoLectureGroups = (
    params?: GetApiVideoLectureGroupsParams,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<DTOVideoLectureGroupDtoGet[]>(
      {url: `/api/VideoLectureGroups`, method: 'GET',
        params
    },
      options);
    }
  
/**
 * @summary Get Video Lecture Group by id
 */
export const getApiVideoLectureGroupsId = (
    id: string,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<DTOVideoLectureGroupDtoGet>(
      {url: `/api/VideoLectureGroups/${id}`, method: 'GET'
    },
      options);
    }
  
/**
 * @summary Delete Video Lecture Group by id
 */
export const deleteApiVideoLectureGroupsId = (
    id: string,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<void>(
      {url: `/api/VideoLectureGroups/${id}`, method: 'DELETE'
    },
      options);
    }
  
/**
 * @summary Add Video Lecture to Video Lecture Group
 */
export const patchApiVideoLectureGroupsAddVideoLecture = (
    dTOVideoLectureDtoAdd: BodyType<DTOVideoLectureDtoAdd>,
    params: PatchApiVideoLectureGroupsAddVideoLectureParams,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<void>(
      {url: `/api/VideoLectureGroups/AddVideoLecture`, method: 'PATCH',
      headers: {'Content-Type': 'application/json', },
      data: dTOVideoLectureDtoAdd,
        params
    },
      options);
    }
  
/**
 * @summary Delete Video Lecture from Video Lecture Group
 */
export const deleteApiVideoLectureGroupsRemoveVideoLecture = (
    params: DeleteApiVideoLectureGroupsRemoveVideoLectureParams,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<void>(
      {url: `/api/VideoLectureGroups/RemoveVideoLecture`, method: 'DELETE',
        params
    },
      options);
    }
  

type AwaitedInput<T> = PromiseLike<T> | T;

    type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

export type PostApiAuthAccessResult = NonNullable<Awaited<ReturnType<typeof postApiAuthAccess>>>
export type PostApiAuthRefreshResult = NonNullable<Awaited<ReturnType<typeof postApiAuthRefresh>>>
export type GetApiEnumsRolesTypeEnumResult = NonNullable<Awaited<ReturnType<typeof getApiEnumsRolesTypeEnum>>>
export type GetApiEnumsReccurencePatternsTypeEnumResult = NonNullable<Awaited<ReturnType<typeof getApiEnumsReccurencePatternsTypeEnum>>>
export type PostApiFileGroupsResult = NonNullable<Awaited<ReturnType<typeof postApiFileGroups>>>
export type PutApiFileGroupsResult = NonNullable<Awaited<ReturnType<typeof putApiFileGroups>>>
export type GetApiFileGroupsResult = NonNullable<Awaited<ReturnType<typeof getApiFileGroups>>>
export type GetApiFileGroupsIdResult = NonNullable<Awaited<ReturnType<typeof getApiFileGroupsId>>>
export type DeleteApiFileGroupsIdResult = NonNullable<Awaited<ReturnType<typeof deleteApiFileGroupsId>>>
export type PostApiFileGroupsAddFileResult = NonNullable<Awaited<ReturnType<typeof postApiFileGroupsAddFile>>>
export type DeleteApiFileGroupsRemoveFileResult = NonNullable<Awaited<ReturnType<typeof deleteApiFileGroupsRemoveFile>>>
export type PostApiGroupsResult = NonNullable<Awaited<ReturnType<typeof postApiGroups>>>
export type PutApiGroupsResult = NonNullable<Awaited<ReturnType<typeof putApiGroups>>>
export type GetApiGroupsResult = NonNullable<Awaited<ReturnType<typeof getApiGroups>>>
export type GetApiGroupsIdResult = NonNullable<Awaited<ReturnType<typeof getApiGroupsId>>>
export type DeleteApiGroupsIdResult = NonNullable<Awaited<ReturnType<typeof deleteApiGroupsId>>>
export type PostApiGroupsAddStudentToGroupResult = NonNullable<Awaited<ReturnType<typeof postApiGroupsAddStudentToGroup>>>
export type DeleteApiGroupsRemoveStudentFromGroupResult = NonNullable<Awaited<ReturnType<typeof deleteApiGroupsRemoveStudentFromGroup>>>
export type GetApiGroupsGetAllStudentsFromGroupResult = NonNullable<Awaited<ReturnType<typeof getApiGroupsGetAllStudentsFromGroup>>>
export type PostApiMeetingsResult = NonNullable<Awaited<ReturnType<typeof postApiMeetings>>>
export type PutApiMeetingsResult = NonNullable<Awaited<ReturnType<typeof putApiMeetings>>>
export type GetApiMeetingsResult = NonNullable<Awaited<ReturnType<typeof getApiMeetings>>>
export type GetApiMeetingsIdResult = NonNullable<Awaited<ReturnType<typeof getApiMeetingsId>>>
export type DeleteApiMeetingsIdResult = NonNullable<Awaited<ReturnType<typeof deleteApiMeetingsId>>>
export type PostApiMeetingsAddStudentToMeetingResult = NonNullable<Awaited<ReturnType<typeof postApiMeetingsAddStudentToMeeting>>>
export type DeleteApiMeetingsRemoveStudentFromMeetingResult = NonNullable<Awaited<ReturnType<typeof deleteApiMeetingsRemoveStudentFromMeeting>>>
export type GetApiMeetingsGetAllStudentsFromMeetingResult = NonNullable<Awaited<ReturnType<typeof getApiMeetingsGetAllStudentsFromMeeting>>>
export type PostApiRegisterRegisterTrainerResult = NonNullable<Awaited<ReturnType<typeof postApiRegisterRegisterTrainer>>>
export type PostApiRegisterApproveTrainerResult = NonNullable<Awaited<ReturnType<typeof postApiRegisterApproveTrainer>>>
export type PostApiStudentsResult = NonNullable<Awaited<ReturnType<typeof postApiStudents>>>
export type PutApiStudentsResult = NonNullable<Awaited<ReturnType<typeof putApiStudents>>>
export type GetApiStudentsResult = NonNullable<Awaited<ReturnType<typeof getApiStudents>>>
export type GetApiStudentsIdResult = NonNullable<Awaited<ReturnType<typeof getApiStudentsId>>>
export type DeleteApiStudentsIdResult = NonNullable<Awaited<ReturnType<typeof deleteApiStudentsId>>>
export type GetApiTrainersIdResult = NonNullable<Awaited<ReturnType<typeof getApiTrainersId>>>
export type DeleteApiTrainersIdResult = NonNullable<Awaited<ReturnType<typeof deleteApiTrainersId>>>
export type PutApiTrainersResult = NonNullable<Awaited<ReturnType<typeof putApiTrainers>>>
export type GetApiTrainersResult = NonNullable<Awaited<ReturnType<typeof getApiTrainers>>>
export type PostApiUsersAccountForgotPasswordResult = NonNullable<Awaited<ReturnType<typeof postApiUsersAccountForgotPassword>>>
export type PostApiUsersAccountResetPasswordResult = NonNullable<Awaited<ReturnType<typeof postApiUsersAccountResetPassword>>>
export type PostApiUsersAccountIsResetTokenExpiredResult = NonNullable<Awaited<ReturnType<typeof postApiUsersAccountIsResetTokenExpired>>>
export type PostApiUsersAccountChangePasswordResult = NonNullable<Awaited<ReturnType<typeof postApiUsersAccountChangePassword>>>
export type PostApiVideoLectureGroupsResult = NonNullable<Awaited<ReturnType<typeof postApiVideoLectureGroups>>>
export type PutApiVideoLectureGroupsResult = NonNullable<Awaited<ReturnType<typeof putApiVideoLectureGroups>>>
export type GetApiVideoLectureGroupsResult = NonNullable<Awaited<ReturnType<typeof getApiVideoLectureGroups>>>
export type GetApiVideoLectureGroupsIdResult = NonNullable<Awaited<ReturnType<typeof getApiVideoLectureGroupsId>>>
export type DeleteApiVideoLectureGroupsIdResult = NonNullable<Awaited<ReturnType<typeof deleteApiVideoLectureGroupsId>>>
export type PatchApiVideoLectureGroupsAddVideoLectureResult = NonNullable<Awaited<ReturnType<typeof patchApiVideoLectureGroupsAddVideoLecture>>>
export type DeleteApiVideoLectureGroupsRemoveVideoLectureResult = NonNullable<Awaited<ReturnType<typeof deleteApiVideoLectureGroupsRemoveVideoLecture>>>
