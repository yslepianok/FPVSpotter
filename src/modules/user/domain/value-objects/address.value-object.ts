import { ValueObject } from 'src/core/base-classes/value-object.base';
import { Guard } from 'src/core/guard';
import { ArgumentOutOfRangeException } from '@exceptions';

export interface AddressProps {
  country: string;
  postalCode: string;
  street: string;
}

export class Address extends ValueObject<AddressProps> {
  get country(): string {
    return this.props.country;
  }

  get postalCode(): string {
    return this.props.postalCode;
  }

  get street(): string {
    return this.props.street;
  }

  /**
   * Note: This is a very simplified example of validation,
   * real world projects will have stricter rules
   */
  protected validate(props: AddressProps): void {
    if (!Guard.lengthIsBetween(props.country, 2, 50)) {
      throw new ArgumentOutOfRangeException('country is out of range');
    }
    if (!Guard.lengthIsBetween(props.street, 2, 50)) {
      throw new ArgumentOutOfRangeException('street is out of range');
    }
    if (!Guard.lengthIsBetween(props.postalCode, 2, 10)) {
      throw new ArgumentOutOfRangeException('postalCode is out of range');
    }
  }
}
