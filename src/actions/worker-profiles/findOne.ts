import { defineAction } from 'astro:actions'
import { db, eq, WorkerProfile, } from 'astro:db'

export const findOneWorkerProfile = defineAction({
  accept: 'json',
  handler: async ({ id }) => {
    const [ data ] = await db
      .select()
      .from( WorkerProfile )
      .where( eq( WorkerProfile.id, id ) )

    if ( !data )
      throw new Error( 'No se encontró el perfil del trabajador. 🤵‍♂️' )

    return {
      workerProfile: data
    }
  }
})
