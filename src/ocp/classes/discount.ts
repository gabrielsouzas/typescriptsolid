/**
 * Para aplicar o principio OCP é criada uma classe que vai implementar o discount que antes estava diretamente no ShoppingCart
 * Assim essa classe não precisa mais ser modificada, evitando refatoração de código e novos testes
 * Após isso é usado o esquema de estratégias do GOF para não precisar mexer em código já criado
 * Ou seja, novas estratégias (classes nesse caso) podem ser desenvolvidas, emplementando o discount
 */

export abstract class Discount {
  protected discount = 0;

  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class FiftyPercentDiscount extends Discount {
  protected readonly discount = 0.5;
}

export class TenPercentDiscount extends Discount {
  protected readonly discount = 0.1;
}

export class NoDiscount extends Discount {}
