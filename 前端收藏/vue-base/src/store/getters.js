const login = state => state.user.login
const userUuid = state => state.user.uuid
const userCode = state => state.user.code
const userName = state => state.user.name
const userJob = state => state.user.job
const userJobName = state => state.user.jobName
const userMail = state => state.user.email
const userMobile = state => state.user.mobile
const userFax = state => state.user.fax
const userPhone = state => state.user.phone
const userStatus = state => state.user.status
const userDepartment = state => state.user.department
const userDepartmentName = state => state.user.departmentName
const userAuth = state => state.user.auth
const userPageSize = state => state.user.pageSize
const userOfficePreviewMode = state => state.user.officePreviewMode
const userRole = state => state.user.role
const userApprover = state => state.user.approver
const userClientManager = state => state.user.clientManager
const userBussinessManager = state => state.user.bussinessManager
export {
  login,
  userUuid,
  userCode,
  userName,
  userJob,
  userJobName,
  userMail,
  userMobile,
  userFax,
  userPhone,
  userStatus,
  // userDepartment,
  userDepartmentName,
  userAuth,
  userPageSize,
  userOfficePreviewMode,
  userRole,
  userApprover,
  userClientManager,
  userBussinessManager
}
