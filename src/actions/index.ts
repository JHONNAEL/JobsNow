import { signupUser } from './auth'
import { updateProfile } from './profile'
import { createServiceCategory, findAllServiceCategories, findOneServiceCategory, toggleStatusServiceCategory, updateServiceCategory } from './service-categories'
import { createService, deleteService, findAllServices, findAllServicesByWorkerId, findOneService, updateService } from './services'
import { findAllTransactionsByWalletId } from './transactions'
import { createUser, findAllUsers, findOneUser, toggleStatusUser, updateUser } from './users'
import { findOneWalletByUserId, paymentAmountWallet, rechargeAmountWallet } from './wallets'
import { approveDisapproveWorkerProfile, createWorkerProfile, findAllWorkerProfiles, findOneWorkerProfile, findOneWorkerProfileByUserId, updateWorkerProfile } from './worker-profiles'

export const server = {
  signupUser,

  findAllUsers,
  findOneUser,
  createUser,
  updateUser,
  toggleStatusUser,

  findAllServiceCategories,
  findOneServiceCategory,
  createServiceCategory,
  updateServiceCategory,
  toggleStatusServiceCategory,

  findOneWalletByUserId,
  rechargeAmountWallet,
  paymentAmountWallet,

  updateProfile,

  findAllTransactionsByWalletId,

  findAllWorkerProfiles,
  findOneWorkerProfile,
  createWorkerProfile,
  updateWorkerProfile,
  approveDisapproveWorkerProfile,
  findOneWorkerProfileByUserId,

  findAllServices,
  findAllServicesByWorkerId,
  findOneService,
  createService,
  updateService,
  deleteService,
}
