// cannister code goes here
import {
  $query,
  $update,
  Record,
  StableBTreeMap,
  Vec,
  match,
  Result,
  nat64,
  ic,
  Opt,
  Principal,
  int32,
} from "azle";
import random from "random";

type PropertyRecord = Record<{
  id: string;
  title: string;
  CreatorId: Principal;
  Description: string;
  Area: string;
  available: int32;
  decimals: int32;
  attachmentURL: string;
  createdAt: nat64;
  updatedAt: Opt<nat64>;
}>;

type PropertyRecordPayload = Record<{
  title: string;
  Description: string;
  Area: string;
  available: int32;
  decimals: int32;
  attachmentURL: string;
}>;

type InvestorRecord = Record<{
  id: string;
  InvestorId: Principal;
  InvestmentId: string;
  amount: int32;
  status: string;
  createdAt: nat64;
  updatedAt: Opt<nat64>;
}>;

type InvestorRecordPayload = Record<{
  InvestmentId: string;
  amount: int32;
}>;
const recordStorage = new StableBTreeMap<string, PropertyRecord>(0, 44, 1024);
const investorStorage = new StableBTreeMap<string, InvestorRecord>(0, 44, 1024);

$query;
export function getAllRecords(): Result<Vec<PropertyRecord>, string> {
  let records = recordStorage.values();
  return Result.Ok(records);
}

$query;
export function getProperty(id: string): Result<PropertyRecord, string> {
  return match(recordStorage.get(id), {
    Some: (record) => {
      return Result.Ok<PropertyRecord, string>(record);
    },
    None: () =>
      Result.Err<PropertyRecord, string>(`The Record with id=${id} not found`),
  });
}

$query;
export function getCaller(): Result<Principal, string> {
  return Result.Ok(ic.caller());
}

$query;
export function getCreatorId(id: string): Result<Principal, string> {
  return match(recordStorage.get(id), {
    Some: (record) => Result.Ok<Principal, string>(record.CreatorId),
    None: () =>
      Result.Err<Principal, string>(`The Record with id=${id} not found`),
  });
}
$update;
export function listProperty(
  payload: PropertyRecordPayload
): Result<PropertyRecord, string> {
  const record: PropertyRecord = {
    id: generateRandomString44(),
    CreatorId: ic.caller(),
    createdAt: ic.time(),
    updatedAt: Opt.None,
    ...payload,
  };
  recordStorage.insert(record.id, record);
  return Result.Ok(record);
}

$update;
export function buyProperty(
  id: string,
  payload: InvestorRecordPayload
): Result<InvestorRecord, string> {
  const record: InvestorRecord = {
    id: generateRandomString44(),
    InvestorId: ic.caller(),
    status: "invested",
    createdAt: ic.time(),
    updatedAt: Opt.None,
    ...payload,
  };
  investorStorage.insert(record.id, record);
  return Result.Ok(record);
}
$update;
export function updateRecord(
  id: string,
  payload: PropertyRecordPayload
): Result<PropertyRecord, string> {
  return match(recordStorage.get(id), {
    Some: (record) => {
      if (record.CreatorId.toString() !== ic.caller().toString())
        return Result.Err<PropertyRecord, string>(
          `Only the creator can update the Record`
        );
      const updatedRecord: PropertyRecord = {
        ...record,
        ...payload,
        updatedAt: Opt.Some(ic.time()),
      };
      recordStorage.insert(record.id, updatedRecord);
      return Result.Ok<PropertyRecord, string>(updatedRecord);
    },
    None: () =>
      Result.Err<PropertyRecord, string>(
        `couldn't update a record with id=${id}. Record not found`
      ),
  });
}

$update;
export function deleteListedProperty(
  id: string
): Result<PropertyRecord, string> {
  return match(recordStorage.get(id), {
    Some: (record) => {
      if (record.CreatorId.toString() !== ic.caller().toString())
        return Result.Err<PropertyRecord, string>(
          `Only the creator can delete the Property`
        );
      recordStorage.remove(id);
      return Result.Ok<PropertyRecord, string>(record);
    },
    None: () =>
      Result.Err<PropertyRecord, string>(
        `couldn't delete a record with id=${id}. Record not found.`
      ),
  });
}

function generateRandomString44() {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const randomString = new Array(30).fill(null);
  for (let i = 0; i < 30; i++) {
    const randomIndex = random.int(0, characters.length - 1);
    randomString[i] = characters[randomIndex];
  }
  return randomString.join("");
}
