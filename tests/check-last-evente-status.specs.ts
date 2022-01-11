class CheckLastEventStatus{
  //podemos usar private readonly e apagar os comentários
  //loadLastEventRepository: LoadLastEventRepository

  constructor(private readonly loadLastEventRepository: LoadLastEventRepository){
    //this.loadLastEventRepository = loadLastEventRepository;
  }
  async perform (groupId:string): Promise<void>{
  }
}

class LoadLastEventRepository{
  groupId: string | undefined;
}

describe("CheckLastEventStatus",() =>{
  it("should get last event data",async()=>{
    const loadLastEventRepository = new LoadLastEventRepository()
    const checkLastEventStatus = new CheckLastEventStatus(loadLastEventRepository);

    await checkLastEventStatus.perform('any_group_id')

    expect(loadLastEventRepository.groupId).toBe('any_group_id')
  })
})