/* eslint-disable */
/* THIS FILE WAS AUTO-GENERATED USING CATALOG EXPORTER; YOU SHOULD NOT EDIT THIS FILE; GENERATE TIME: 2023-07-18T10:51:04.475Z; */
// @ts-ignore ignore unused imports here if they happen (e.g. when there is no measure in the workspace)
import { newAttribute, newMeasure, IAttribute, IMeasure, IMeasureDefinition, idRef } from "@gooddata/sdk-model";

/**
 * Attribute Title: Customer city
 * Attribute ID: customer_city
 */
export const CustomerCity = {
  /**
   * Display Form Title: Customer city
   * Display Form ID: customer_city
   */
  Default: newAttribute("customer_city")
  /**
   * Display Form Title: City pushpin latitude
   * Display Form ID: geo__customer_city__city_pushpin_latitude
   */,
  CityPushpinLatitude: newAttribute("geo__customer_city__city_pushpin_latitude")
  /**
   * Display Form Title: City pushpin longitude
   * Display Form ID: geo__customer_city__city_pushpin_longitude
   */,
  CityPushpinLongitude: newAttribute("geo__customer_city__city_pushpin_longitude"),
};
/**
 * Attribute Title: Customer country
 * Attribute ID: customer_country
 */
export const CustomerCountry: IAttribute = newAttribute("customer_country");
/**
 * Attribute Title: Customer email
 * Attribute ID: customer_email
 */
export const CustomerEmail: IAttribute = newAttribute("customer_email");
/**
 * Attribute Title: Customer id
 * Attribute ID: customer_id
 */
export const CustomerId = {
  /**
   * Display Form Title: Customer name
   * Display Form ID: customer_name
   */
  CustomerName: newAttribute("customer_name")
  /**
   * Display Form Title: Customer id
   * Display Form ID: customer_id
   */,
  Default: newAttribute("customer_id"),
};
/**
 * Attribute Title: Customer state
 * Attribute ID: customer_state
 */
export const CustomerState: IAttribute = newAttribute("customer_state");
/**
 * Attribute Title: Monthly inventory id
 * Attribute ID: monthly_inventory_id
 */
export const MonthlyInventoryId: IAttribute = newAttribute("monthly_inventory_id");
/**
 * Attribute Title: Customer age
 * Attribute ID: customer_age
 */
export const CustomerAge: IAttribute = newAttribute("customer_age");
/**
 * Attribute Title: Order line id
 * Attribute ID: order_line_id
 */
export const OrderLineId: IAttribute = newAttribute("order_line_id");
/**
 * Attribute Title: Order id
 * Attribute ID: order_id
 */
export const OrderId: IAttribute = newAttribute("order_id");
/**
 * Attribute Title: Order status
 * Attribute ID: order_status
 */
export const OrderStatus: IAttribute = newAttribute("order_status");
/**
 * Attribute Title: Product brand
 * Attribute ID: product_brand
 */
export const ProductBrand: IAttribute = newAttribute("product_brand");
/**
 * Attribute Title: Product category
 * Attribute ID: product_category
 */
export const ProductCategory: IAttribute = newAttribute("product_category");
/**
 * Attribute Title: Product id
 * Attribute ID: product_id
 */
export const ProductId = {
  /**
   * Display Form Title: Product name
   * Display Form ID: product_name
   */
  ProductName: newAttribute("product_name")
  /**
   * Display Form Title: Product id image web
   * Display Form ID: product_id_image_web
   */,
  ImageWeb: newAttribute("product_id_image_web")
  /**
   * Display Form Title: Product id
   * Display Form ID: product_id
   */,
  Default: newAttribute("product_id"),
};
/**
 * Attribute Title: Product image
 * Attribute ID: product_image
 */
export const ProductImage = {
  /**
   * Display Form Title: Product image
   * Display Form ID: product_image
   */
  Default: newAttribute("product_image")
  /**
   * Display Form Title: Product image web
   * Display Form ID: product_image_web
   */,
  Web: newAttribute("product_image_web"),
};
/**
 * Attribute Title: Product rating
 * Attribute ID: product_rating
 */
export const ProductRating: IAttribute = newAttribute("product_rating");
/**
 * Attribute Title: Return id
 * Attribute ID: return_id
 */
export const ReturnId: IAttribute = newAttribute("return_id");
/**
 * Metric Title: Active customers
 * Metric ID: active_customers_2
 * Metric Type: MAQL Metric
 */
export const ActiveCustomers: IMeasure<IMeasureDefinition> = newMeasure(idRef("active_customers_2", "measure"));
/**
 * Metric Title: Active Customers
 * Metric ID: active_customers
 * Metric Type: MAQL Metric
 */
export const ActiveCustomers_1: IMeasure<IMeasureDefinition> = newMeasure(idRef("active_customers", "measure"));
/**
 * Metric Title: ARPU
 * Metric ID: arpu
 * Metric Type: MAQL Metric
 */
export const ARPU: IMeasure<IMeasureDefinition> = newMeasure(idRef("arpu", "measure"));
/**
 * Metric Title: Average Price of Products
 * Metric ID: average_price_of_products
 * Metric Type: MAQL Metric
 */
export const AveragePriceOfProducts: IMeasure<IMeasureDefinition> = newMeasure(
  idRef("average_price_of_products", "measure")
);
/**
 * Metric Title: Average Product Cost
 * Metric ID: average_product_cost
 * Metric Type: MAQL Metric
 */
export const AverageProductCost: IMeasure<IMeasureDefinition> = newMeasure(idRef("average_product_cost", "measure"));
/**
 * Metric Title: Average Product List Price
 * Metric ID: average_product_list_price
 * Metric Type: MAQL Metric
 */
export const AverageProductListPrice: IMeasure<IMeasureDefinition> = newMeasure(
  idRef("average_product_list_price", "measure")
);
/**
 * Metric Title: COGS
 * Metric ID: cogs
 * Metric Type: MAQL Metric
 */
export const COGS: IMeasure<IMeasureDefinition> = newMeasure(idRef("cogs", "measure"));
/**
 * Metric Title: COGS [Orders]
 * Metric ID: cogs_orders
 * Metric Type: MAQL Metric
 */
export const COGSOrders: IMeasure<IMeasureDefinition> = newMeasure(idRef("cogs_orders", "measure"));
/**
 * Metric Title: COGS [Returns]
 * Metric ID: cogs_returns
 * Metric Type: MAQL Metric
 */
export const COGSReturns: IMeasure<IMeasureDefinition> = newMeasure(idRef("cogs_returns", "measure"));
/**
 * Metric Title: Customers w/ Processed Orders
 * Metric ID: customers_w_processed_orders
 * Metric Type: MAQL Metric
 */
export const CustomersWProcessedOrders: IMeasure<IMeasureDefinition> = newMeasure(
  idRef("customers_w_processed_orders", "measure")
);
/**
 * Metric Title: Gross Profit
 * Metric ID: gross_profit
 * Metric Type: MAQL Metric
 */
export const GrossProfit: IMeasure<IMeasureDefinition> = newMeasure(idRef("gross_profit", "measure"));
/**
 * Metric Title: Gross Profit Margin
 * Metric ID: gross_profit_margin
 * Metric Type: MAQL Metric
 */
export const GrossProfitMargin: IMeasure<IMeasureDefinition> = newMeasure(idRef("gross_profit_margin", "measure"));
/**
 * Metric Title: Net Orders
 * Metric ID: net_orders
 * Metric Type: MAQL Metric
 */
export const NetOrders: IMeasure<IMeasureDefinition> = newMeasure(idRef("net_orders", "measure"));
/**
 * Metric Title: Net Sales
 * Metric ID: net_sales
 * Metric Type: MAQL Metric
 */
export const NetSales: IMeasure<IMeasureDefinition> = newMeasure(idRef("net_sales", "measure"));
/**
 * Metric Title: Net Sales Goal
 * Metric ID: net_sales_goal
 * Metric Type: MAQL Metric
 */
export const NetSalesGoal: IMeasure<IMeasureDefinition> = newMeasure(idRef("net_sales_goal", "measure"));
/**
 * Metric Title: New Customers
 * Metric ID: new_customers
 * Metric Type: MAQL Metric
 */
export const NewCustomers: IMeasure<IMeasureDefinition> = newMeasure(idRef("new_customers", "measure"));
/**
 * Metric Title: New Customers Monthly
 * Metric ID: new_customers_monthly
 * Metric Type: MAQL Metric
 */
export const NewCustomersMonthly: IMeasure<IMeasureDefinition> = newMeasure(idRef("new_customers_monthly", "measure"));
/**
 * Metric Title: % of Net Sales
 * Metric ID: of_net_sales
 * Metric Type: MAQL Metric
 */
export const PercentOfNetSales: IMeasure<IMeasureDefinition> = newMeasure(idRef("of_net_sales", "measure"));
/**
 * Metric Title: # of Orders
 * Metric ID: of_orders
 * Metric Type: MAQL Metric
 */
export const NrOfOrders: IMeasure<IMeasureDefinition> = newMeasure(idRef("of_orders", "measure"));
/**
 * Metric Title: Order Amount
 * Metric ID: order_amount
 * Metric Type: MAQL Metric
 */
export const OrderAmount: IMeasure<IMeasureDefinition> = newMeasure(idRef("order_amount", "measure"));
/**
 * Metric Title: Orders all time
 * Metric ID: orders_all_time
 * Metric Type: MAQL Metric
 */
export const OrdersAllTime: IMeasure<IMeasureDefinition> = newMeasure(idRef("orders_all_time", "measure"));
/**
 * Metric Title: Product Rating
 * Metric ID: product_rating
 * Metric Type: MAQL Metric
 */
export const ProductRating_1: IMeasure<IMeasureDefinition> = newMeasure(idRef("product_rating", "measure"));
/**
 * Metric Title: Return Customers
 * Metric ID: return_customers
 * Metric Type: MAQL Metric
 */
export const ReturnCustomers: IMeasure<IMeasureDefinition> = newMeasure(idRef("return_customers", "measure"));
/**
 * Metric Title: Return Customers Monthly
 * Metric ID: return_customers_monthly
 * Metric Type: MAQL Metric
 */
export const ReturnCustomersMonthly: IMeasure<IMeasureDefinition> = newMeasure(
  idRef("return_customers_monthly", "measure")
);
/**
 * Metric Title: Returns
 * Metric ID: returns
 * Metric Type: MAQL Metric
 */
export const Returns: IMeasure<IMeasureDefinition> = newMeasure(idRef("returns", "measure"));
/**
 * Metric Title: % Sell Through
 * Metric ID: sell_through
 * Metric Type: MAQL Metric
 */
export const PercentSellThrough: IMeasure<IMeasureDefinition> = newMeasure(idRef("sell_through", "measure"));
/**
 * Metric Title: Total Customers
 * Metric ID: total_customers
 * Metric Type: MAQL Metric
 */
export const TotalCustomers: IMeasure<IMeasureDefinition> = newMeasure(idRef("total_customers", "measure"));
/**
 * Metric Title: Total Discounts
 * Metric ID: total_discounts
 * Metric Type: MAQL Metric
 */
export const TotalDiscounts: IMeasure<IMeasureDefinition> = newMeasure(idRef("total_discounts", "measure"));
/**
 * Metric Title: Total Listings
 * Metric ID: total_listings
 * Metric Type: MAQL Metric
 */
export const TotalListings: IMeasure<IMeasureDefinition> = newMeasure(idRef("total_listings", "measure"));
/**
 * Metric Title: Total Returns
 * Metric ID: total_returns
 * Metric Type: MAQL Metric
 */
export const TotalReturns: IMeasure<IMeasureDefinition> = newMeasure(idRef("total_returns", "measure"));
/**
 * Metric Title: Total Sales
 * Metric ID: total_sales
 * Metric Type: MAQL Metric
 */
export const TotalSales: IMeasure<IMeasureDefinition> = newMeasure(idRef("total_sales", "measure"));
/**
 * Fact Title: Monthly quantity bom
 * Fact ID: monthly_quantity_bom
 */
export const MonthlyQuantityBom = {
  /**
   * Fact Title: Monthly quantity bom
   * Fact ID: monthly_quantity_bom
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("monthly_quantity_bom", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Monthly quantity bom
   * Fact ID: monthly_quantity_bom
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("monthly_quantity_bom", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Monthly quantity bom
   * Fact ID: monthly_quantity_bom
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("monthly_quantity_bom", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Monthly quantity bom
   * Fact ID: monthly_quantity_bom
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("monthly_quantity_bom", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Monthly quantity bom
   * Fact ID: monthly_quantity_bom
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("monthly_quantity_bom", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Monthly quantity bom
   * Fact ID: monthly_quantity_bom
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("monthly_quantity_bom", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Monthly quantity eom
 * Fact ID: monthly_quantity_eom
 */
export const MonthlyQuantityEom = {
  /**
   * Fact Title: Monthly quantity eom
   * Fact ID: monthly_quantity_eom
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("monthly_quantity_eom", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Monthly quantity eom
   * Fact ID: monthly_quantity_eom
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("monthly_quantity_eom", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Monthly quantity eom
   * Fact ID: monthly_quantity_eom
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("monthly_quantity_eom", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Monthly quantity eom
   * Fact ID: monthly_quantity_eom
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("monthly_quantity_eom", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Monthly quantity eom
   * Fact ID: monthly_quantity_eom
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("monthly_quantity_eom", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Monthly quantity eom
   * Fact ID: monthly_quantity_eom
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("monthly_quantity_eom", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Order unit cost
 * Fact ID: order_unit_cost
 */
export const OrderUnitCost = {
  /**
   * Fact Title: Order unit cost
   * Fact ID: order_unit_cost
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("order_unit_cost", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Order unit cost
   * Fact ID: order_unit_cost
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("order_unit_cost", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Order unit cost
   * Fact ID: order_unit_cost
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("order_unit_cost", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Order unit cost
   * Fact ID: order_unit_cost
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("order_unit_cost", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Order unit cost
   * Fact ID: order_unit_cost
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("order_unit_cost", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Order unit cost
   * Fact ID: order_unit_cost
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("order_unit_cost", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Order unit discount
 * Fact ID: order_unit_discount
 */
export const OrderUnitDiscount = {
  /**
   * Fact Title: Order unit discount
   * Fact ID: order_unit_discount
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("order_unit_discount", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Order unit discount
   * Fact ID: order_unit_discount
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("order_unit_discount", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Order unit discount
   * Fact ID: order_unit_discount
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("order_unit_discount", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Order unit discount
   * Fact ID: order_unit_discount
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("order_unit_discount", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Order unit discount
   * Fact ID: order_unit_discount
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("order_unit_discount", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Order unit discount
   * Fact ID: order_unit_discount
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("order_unit_discount", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Order unit price
 * Fact ID: order_unit_price
 */
export const OrderUnitPrice = {
  /**
   * Fact Title: Order unit price
   * Fact ID: order_unit_price
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("order_unit_price", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Order unit price
   * Fact ID: order_unit_price
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("order_unit_price", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Order unit price
   * Fact ID: order_unit_price
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("order_unit_price", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Order unit price
   * Fact ID: order_unit_price
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("order_unit_price", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Order unit price
   * Fact ID: order_unit_price
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("order_unit_price", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Order unit price
   * Fact ID: order_unit_price
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("order_unit_price", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Order unit quantity
 * Fact ID: order_unit_quantity
 */
export const OrderUnitQuantity = {
  /**
   * Fact Title: Order unit quantity
   * Fact ID: order_unit_quantity
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("order_unit_quantity", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Order unit quantity
   * Fact ID: order_unit_quantity
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("order_unit_quantity", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Order unit quantity
   * Fact ID: order_unit_quantity
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("order_unit_quantity", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Order unit quantity
   * Fact ID: order_unit_quantity
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("order_unit_quantity", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Order unit quantity
   * Fact ID: order_unit_quantity
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("order_unit_quantity", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Order unit quantity
   * Fact ID: order_unit_quantity
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("order_unit_quantity", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Rating
 * Fact ID: rating
 */
export const Rating = {
  /**
   * Fact Title: Rating
   * Fact ID: rating
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("rating", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Rating
   * Fact ID: rating
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("rating", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Rating
   * Fact ID: rating
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("rating", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Rating
   * Fact ID: rating
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("rating", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Rating
   * Fact ID: rating
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("rating", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Rating
   * Fact ID: rating
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("rating", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Return unit cost
 * Fact ID: return_unit_cost
 */
export const ReturnUnitCost = {
  /**
   * Fact Title: Return unit cost
   * Fact ID: return_unit_cost
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("return_unit_cost", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Return unit cost
   * Fact ID: return_unit_cost
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("return_unit_cost", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Return unit cost
   * Fact ID: return_unit_cost
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("return_unit_cost", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Return unit cost
   * Fact ID: return_unit_cost
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("return_unit_cost", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Return unit cost
   * Fact ID: return_unit_cost
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("return_unit_cost", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Return unit cost
   * Fact ID: return_unit_cost
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("return_unit_cost", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Return unit paid amount
 * Fact ID: return_unit_paid_amount
 */
export const ReturnUnitPaidAmount = {
  /**
   * Fact Title: Return unit paid amount
   * Fact ID: return_unit_paid_amount
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("return_unit_paid_amount", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Return unit paid amount
   * Fact ID: return_unit_paid_amount
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("return_unit_paid_amount", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Return unit paid amount
   * Fact ID: return_unit_paid_amount
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("return_unit_paid_amount", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Return unit paid amount
   * Fact ID: return_unit_paid_amount
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("return_unit_paid_amount", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Return unit paid amount
   * Fact ID: return_unit_paid_amount
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("return_unit_paid_amount", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Return unit paid amount
   * Fact ID: return_unit_paid_amount
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("return_unit_paid_amount", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Return unit quantity
 * Fact ID: return_unit_quantity
 */
export const ReturnUnitQuantity = {
  /**
   * Fact Title: Return unit quantity
   * Fact ID: return_unit_quantity
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("return_unit_quantity", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Return unit quantity
   * Fact ID: return_unit_quantity
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("return_unit_quantity", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Return unit quantity
   * Fact ID: return_unit_quantity
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("return_unit_quantity", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Return unit quantity
   * Fact ID: return_unit_quantity
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("return_unit_quantity", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Return unit quantity
   * Fact ID: return_unit_quantity
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("return_unit_quantity", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Return unit quantity
   * Fact ID: return_unit_quantity
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("return_unit_quantity", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Attribute Title: Customer created date - Minute
 * Attribute ID: customer_created_date.minute
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CustomerCreatedDateMinute: IAttribute = newAttribute("customer_created_date.minute");
/**
 * Attribute Title: Customer created date - Hour
 * Attribute ID: customer_created_date.hour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CustomerCreatedDateHour: IAttribute = newAttribute("customer_created_date.hour");
/**
 * Attribute Title: Customer created date - Date
 * Attribute ID: customer_created_date.day
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CustomerCreatedDateDate: IAttribute = newAttribute("customer_created_date.day");
/**
 * Attribute Title: Customer created date - Week/Year
 * Attribute ID: customer_created_date.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CustomerCreatedDateWeekYear: IAttribute = newAttribute("customer_created_date.week");
/**
 * Attribute Title: Customer created date - Month/Year
 * Attribute ID: customer_created_date.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CustomerCreatedDateMonthYear: IAttribute = newAttribute("customer_created_date.month");
/**
 * Attribute Title: Customer created date - Quarter/Year
 * Attribute ID: customer_created_date.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CustomerCreatedDateQuarterYear: IAttribute = newAttribute("customer_created_date.quarter");
/**
 * Attribute Title: Customer created date - Year
 * Attribute ID: customer_created_date.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CustomerCreatedDateYear: IAttribute = newAttribute("customer_created_date.year");
/**
 * Attribute Title: Customer created date - Minute of Hour
 * Attribute ID: customer_created_date.minuteOfHour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CustomerCreatedDateMinuteOfHour: IAttribute = newAttribute("customer_created_date.minuteOfHour");
/**
 * Attribute Title: Customer created date - Hour of Day
 * Attribute ID: customer_created_date.hourOfDay
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CustomerCreatedDateHourOfDay: IAttribute = newAttribute("customer_created_date.hourOfDay");
/**
 * Attribute Title: Customer created date - Day of Week
 * Attribute ID: customer_created_date.dayOfWeek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CustomerCreatedDateDayOfWeek: IAttribute = newAttribute("customer_created_date.dayOfWeek");
/**
 * Attribute Title: Customer created date - Day of Month
 * Attribute ID: customer_created_date.dayOfMonth
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CustomerCreatedDateDayOfMonth: IAttribute = newAttribute("customer_created_date.dayOfMonth");
/**
 * Attribute Title: Customer created date - Day of Year
 * Attribute ID: customer_created_date.dayOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CustomerCreatedDateDayOfYear: IAttribute = newAttribute("customer_created_date.dayOfYear");
/**
 * Attribute Title: Customer created date - Week of Year
 * Attribute ID: customer_created_date.weekOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CustomerCreatedDateWeekOfYear: IAttribute = newAttribute("customer_created_date.weekOfYear");
/**
 * Attribute Title: Customer created date - Month of Year
 * Attribute ID: customer_created_date.monthOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CustomerCreatedDateMonthOfYear: IAttribute = newAttribute("customer_created_date.monthOfYear");
/**
 * Attribute Title: Customer created date - Quarter of Year
 * Attribute ID: customer_created_date.quarterOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const CustomerCreatedDateQuarterOfYear: IAttribute = newAttribute("customer_created_date.quarterOfYear");
/**
 * Attribute Title: Date - Minute
 * Attribute ID: date.minute
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateMinute: IAttribute = newAttribute("date.minute");
/**
 * Attribute Title: Date - Hour
 * Attribute ID: date.hour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateHour: IAttribute = newAttribute("date.hour");
/**
 * Attribute Title: Date - Date
 * Attribute ID: date.day
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateDate: IAttribute = newAttribute("date.day");
/**
 * Attribute Title: Date - Week/Year
 * Attribute ID: date.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateWeekYear: IAttribute = newAttribute("date.week");
/**
 * Attribute Title: Date - Month/Year
 * Attribute ID: date.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateMonthYear: IAttribute = newAttribute("date.month");
/**
 * Attribute Title: Date - Quarter/Year
 * Attribute ID: date.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateQuarterYear: IAttribute = newAttribute("date.quarter");
/**
 * Attribute Title: Date - Year
 * Attribute ID: date.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateYear: IAttribute = newAttribute("date.year");
/**
 * Attribute Title: Date - Minute of Hour
 * Attribute ID: date.minuteOfHour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateMinuteOfHour: IAttribute = newAttribute("date.minuteOfHour");
/**
 * Attribute Title: Date - Hour of Day
 * Attribute ID: date.hourOfDay
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateHourOfDay: IAttribute = newAttribute("date.hourOfDay");
/**
 * Attribute Title: Date - Day of Week
 * Attribute ID: date.dayOfWeek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateDayOfWeek: IAttribute = newAttribute("date.dayOfWeek");
/**
 * Attribute Title: Date - Day of Month
 * Attribute ID: date.dayOfMonth
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateDayOfMonth: IAttribute = newAttribute("date.dayOfMonth");
/**
 * Attribute Title: Date - Day of Year
 * Attribute ID: date.dayOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateDayOfYear: IAttribute = newAttribute("date.dayOfYear");
/**
 * Attribute Title: Date - Week of Year
 * Attribute ID: date.weekOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateWeekOfYear: IAttribute = newAttribute("date.weekOfYear");
/**
 * Attribute Title: Date - Month of Year
 * Attribute ID: date.monthOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateMonthOfYear: IAttribute = newAttribute("date.monthOfYear");
/**
 * Attribute Title: Date - Quarter of Year
 * Attribute ID: date.quarterOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateQuarterOfYear: IAttribute = newAttribute("date.quarterOfYear");
/**
 * Attribute Title: Imventory month - Minute
 * Attribute ID: imventory_month.minute
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const ImventoryMonthMinute: IAttribute = newAttribute("imventory_month.minute");
/**
 * Attribute Title: Imventory month - Hour
 * Attribute ID: imventory_month.hour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const ImventoryMonthHour: IAttribute = newAttribute("imventory_month.hour");
/**
 * Attribute Title: Imventory month - Date
 * Attribute ID: imventory_month.day
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const ImventoryMonthDate: IAttribute = newAttribute("imventory_month.day");
/**
 * Attribute Title: Imventory month - Week/Year
 * Attribute ID: imventory_month.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const ImventoryMonthWeekYear: IAttribute = newAttribute("imventory_month.week");
/**
 * Attribute Title: Imventory month - Month/Year
 * Attribute ID: imventory_month.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const ImventoryMonthMonthYear: IAttribute = newAttribute("imventory_month.month");
/**
 * Attribute Title: Imventory month - Quarter/Year
 * Attribute ID: imventory_month.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const ImventoryMonthQuarterYear: IAttribute = newAttribute("imventory_month.quarter");
/**
 * Attribute Title: Imventory month - Year
 * Attribute ID: imventory_month.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const ImventoryMonthYear: IAttribute = newAttribute("imventory_month.year");
/**
 * Attribute Title: Imventory month - Minute of Hour
 * Attribute ID: imventory_month.minuteOfHour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const ImventoryMonthMinuteOfHour: IAttribute = newAttribute("imventory_month.minuteOfHour");
/**
 * Attribute Title: Imventory month - Hour of Day
 * Attribute ID: imventory_month.hourOfDay
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const ImventoryMonthHourOfDay: IAttribute = newAttribute("imventory_month.hourOfDay");
/**
 * Attribute Title: Imventory month - Day of Week
 * Attribute ID: imventory_month.dayOfWeek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const ImventoryMonthDayOfWeek: IAttribute = newAttribute("imventory_month.dayOfWeek");
/**
 * Attribute Title: Imventory month - Day of Month
 * Attribute ID: imventory_month.dayOfMonth
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const ImventoryMonthDayOfMonth: IAttribute = newAttribute("imventory_month.dayOfMonth");
/**
 * Attribute Title: Imventory month - Day of Year
 * Attribute ID: imventory_month.dayOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const ImventoryMonthDayOfYear: IAttribute = newAttribute("imventory_month.dayOfYear");
/**
 * Attribute Title: Imventory month - Week of Year
 * Attribute ID: imventory_month.weekOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const ImventoryMonthWeekOfYear: IAttribute = newAttribute("imventory_month.weekOfYear");
/**
 * Attribute Title: Imventory month - Month of Year
 * Attribute ID: imventory_month.monthOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const ImventoryMonthMonthOfYear: IAttribute = newAttribute("imventory_month.monthOfYear");
/**
 * Attribute Title: Imventory month - Quarter of Year
 * Attribute ID: imventory_month.quarterOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const ImventoryMonthQuarterOfYear: IAttribute = newAttribute("imventory_month.quarterOfYear");
/**
 * Attribute Title: Order date - Minute
 * Attribute ID: order_date.minute
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const OrderDateMinute: IAttribute = newAttribute("order_date.minute");
/**
 * Attribute Title: Order date - Hour
 * Attribute ID: order_date.hour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const OrderDateHour: IAttribute = newAttribute("order_date.hour");
/**
 * Attribute Title: Order date - Date
 * Attribute ID: order_date.day
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const OrderDateDate: IAttribute = newAttribute("order_date.day");
/**
 * Attribute Title: Order date - Week/Year
 * Attribute ID: order_date.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const OrderDateWeekYear: IAttribute = newAttribute("order_date.week");
/**
 * Attribute Title: Order date - Month/Year
 * Attribute ID: order_date.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const OrderDateMonthYear: IAttribute = newAttribute("order_date.month");
/**
 * Attribute Title: Order date - Quarter/Year
 * Attribute ID: order_date.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const OrderDateQuarterYear: IAttribute = newAttribute("order_date.quarter");
/**
 * Attribute Title: Order date - Year
 * Attribute ID: order_date.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const OrderDateYear: IAttribute = newAttribute("order_date.year");
/**
 * Attribute Title: Order date - Minute of Hour
 * Attribute ID: order_date.minuteOfHour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const OrderDateMinuteOfHour: IAttribute = newAttribute("order_date.minuteOfHour");
/**
 * Attribute Title: Order date - Hour of Day
 * Attribute ID: order_date.hourOfDay
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const OrderDateHourOfDay: IAttribute = newAttribute("order_date.hourOfDay");
/**
 * Attribute Title: Order date - Day of Week
 * Attribute ID: order_date.dayOfWeek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const OrderDateDayOfWeek: IAttribute = newAttribute("order_date.dayOfWeek");
/**
 * Attribute Title: Order date - Day of Month
 * Attribute ID: order_date.dayOfMonth
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const OrderDateDayOfMonth: IAttribute = newAttribute("order_date.dayOfMonth");
/**
 * Attribute Title: Order date - Day of Year
 * Attribute ID: order_date.dayOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const OrderDateDayOfYear: IAttribute = newAttribute("order_date.dayOfYear");
/**
 * Attribute Title: Order date - Week of Year
 * Attribute ID: order_date.weekOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const OrderDateWeekOfYear: IAttribute = newAttribute("order_date.weekOfYear");
/**
 * Attribute Title: Order date - Month of Year
 * Attribute ID: order_date.monthOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const OrderDateMonthOfYear: IAttribute = newAttribute("order_date.monthOfYear");
/**
 * Attribute Title: Order date - Quarter of Year
 * Attribute ID: order_date.quarterOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const OrderDateQuarterOfYear: IAttribute = newAttribute("order_date.quarterOfYear");
/**
 * Attribute Title: Return date - Minute
 * Attribute ID: return_date.minute
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const ReturnDateMinute: IAttribute = newAttribute("return_date.minute");
/**
 * Attribute Title: Return date - Hour
 * Attribute ID: return_date.hour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const ReturnDateHour: IAttribute = newAttribute("return_date.hour");
/**
 * Attribute Title: Return date - Date
 * Attribute ID: return_date.day
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const ReturnDateDate: IAttribute = newAttribute("return_date.day");
/**
 * Attribute Title: Return date - Week/Year
 * Attribute ID: return_date.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const ReturnDateWeekYear: IAttribute = newAttribute("return_date.week");
/**
 * Attribute Title: Return date - Month/Year
 * Attribute ID: return_date.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const ReturnDateMonthYear: IAttribute = newAttribute("return_date.month");
/**
 * Attribute Title: Return date - Quarter/Year
 * Attribute ID: return_date.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const ReturnDateQuarterYear: IAttribute = newAttribute("return_date.quarter");
/**
 * Attribute Title: Return date - Year
 * Attribute ID: return_date.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const ReturnDateYear: IAttribute = newAttribute("return_date.year");
/**
 * Attribute Title: Return date - Minute of Hour
 * Attribute ID: return_date.minuteOfHour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const ReturnDateMinuteOfHour: IAttribute = newAttribute("return_date.minuteOfHour");
/**
 * Attribute Title: Return date - Hour of Day
 * Attribute ID: return_date.hourOfDay
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const ReturnDateHourOfDay: IAttribute = newAttribute("return_date.hourOfDay");
/**
 * Attribute Title: Return date - Day of Week
 * Attribute ID: return_date.dayOfWeek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const ReturnDateDayOfWeek: IAttribute = newAttribute("return_date.dayOfWeek");
/**
 * Attribute Title: Return date - Day of Month
 * Attribute ID: return_date.dayOfMonth
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const ReturnDateDayOfMonth: IAttribute = newAttribute("return_date.dayOfMonth");
/**
 * Attribute Title: Return date - Day of Year
 * Attribute ID: return_date.dayOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const ReturnDateDayOfYear: IAttribute = newAttribute("return_date.dayOfYear");
/**
 * Attribute Title: Return date - Week of Year
 * Attribute ID: return_date.weekOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const ReturnDateWeekOfYear: IAttribute = newAttribute("return_date.weekOfYear");
/**
 * Attribute Title: Return date - Month of Year
 * Attribute ID: return_date.monthOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const ReturnDateMonthOfYear: IAttribute = newAttribute("return_date.monthOfYear");
/**
 * Attribute Title: Return date - Quarter of Year
 * Attribute ID: return_date.quarterOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const ReturnDateQuarterOfYear: IAttribute = newAttribute("return_date.quarterOfYear");
/** Available Date Data Sets */
export const DateDatasets = {
  /**
   * Date Data Set Title: Customer created date
   * Date Data Set ID: customer_created_date
   */
  CustomerCreatedDate: {
    ref: idRef("customer_created_date", "dataSet"),
    identifier: "customer_created_date"
    /**
     * Date Attribute: Customer created date - Minute
     * Date Attribute ID: customer_created_date.minute
     */,
    CustomerCreatedDateMinute: {
      ref: idRef("customer_created_date.minute", "attribute"),
      identifier: "customer_created_date.minute"
      /**
       * Display Form Title: Customer created date - Minute
       * Display Form ID: customer_created_date.minute
       */,
      Default: newAttribute("customer_created_date.minute"),
    }
    /**
     * Date Attribute: Customer created date - Hour
     * Date Attribute ID: customer_created_date.hour
     */,
    CustomerCreatedDateHour: {
      ref: idRef("customer_created_date.hour", "attribute"),
      identifier: "customer_created_date.hour"
      /**
       * Display Form Title: Customer created date - Hour
       * Display Form ID: customer_created_date.hour
       */,
      Default: newAttribute("customer_created_date.hour"),
    }
    /**
     * Date Attribute: Customer created date - Date
     * Date Attribute ID: customer_created_date.day
     */,
    CustomerCreatedDateDate: {
      ref: idRef("customer_created_date.day", "attribute"),
      identifier: "customer_created_date.day"
      /**
       * Display Form Title: Customer created date - Date
       * Display Form ID: customer_created_date.day
       */,
      Default: newAttribute("customer_created_date.day"),
    }
    /**
     * Date Attribute: Customer created date - Week/Year
     * Date Attribute ID: customer_created_date.week
     */,
    CustomerCreatedDateWeekYear: {
      ref: idRef("customer_created_date.week", "attribute"),
      identifier: "customer_created_date.week"
      /**
       * Display Form Title: Customer created date - Week/Year
       * Display Form ID: customer_created_date.week
       */,
      Default: newAttribute("customer_created_date.week"),
    }
    /**
     * Date Attribute: Customer created date - Month/Year
     * Date Attribute ID: customer_created_date.month
     */,
    CustomerCreatedDateMonthYear: {
      ref: idRef("customer_created_date.month", "attribute"),
      identifier: "customer_created_date.month"
      /**
       * Display Form Title: Customer created date - Month/Year
       * Display Form ID: customer_created_date.month
       */,
      Default: newAttribute("customer_created_date.month"),
    }
    /**
     * Date Attribute: Customer created date - Quarter/Year
     * Date Attribute ID: customer_created_date.quarter
     */,
    CustomerCreatedDateQuarterYear: {
      ref: idRef("customer_created_date.quarter", "attribute"),
      identifier: "customer_created_date.quarter"
      /**
       * Display Form Title: Customer created date - Quarter/Year
       * Display Form ID: customer_created_date.quarter
       */,
      Default: newAttribute("customer_created_date.quarter"),
    }
    /**
     * Date Attribute: Customer created date - Year
     * Date Attribute ID: customer_created_date.year
     */,
    CustomerCreatedDateYear: {
      ref: idRef("customer_created_date.year", "attribute"),
      identifier: "customer_created_date.year"
      /**
       * Display Form Title: Customer created date - Year
       * Display Form ID: customer_created_date.year
       */,
      Default: newAttribute("customer_created_date.year"),
    }
    /**
     * Date Attribute: Customer created date - Minute of Hour
     * Date Attribute ID: customer_created_date.minuteOfHour
     */,
    CustomerCreatedDateMinuteOfHour: {
      ref: idRef("customer_created_date.minuteOfHour", "attribute"),
      identifier: "customer_created_date.minuteOfHour"
      /**
       * Display Form Title: Customer created date - Minute of Hour
       * Display Form ID: customer_created_date.minuteOfHour
       */,
      Default: newAttribute("customer_created_date.minuteOfHour"),
    }
    /**
     * Date Attribute: Customer created date - Hour of Day
     * Date Attribute ID: customer_created_date.hourOfDay
     */,
    CustomerCreatedDateHourOfDay: {
      ref: idRef("customer_created_date.hourOfDay", "attribute"),
      identifier: "customer_created_date.hourOfDay"
      /**
       * Display Form Title: Customer created date - Hour of Day
       * Display Form ID: customer_created_date.hourOfDay
       */,
      Default: newAttribute("customer_created_date.hourOfDay"),
    }
    /**
     * Date Attribute: Customer created date - Day of Week
     * Date Attribute ID: customer_created_date.dayOfWeek
     */,
    CustomerCreatedDateDayOfWeek: {
      ref: idRef("customer_created_date.dayOfWeek", "attribute"),
      identifier: "customer_created_date.dayOfWeek"
      /**
       * Display Form Title: Customer created date - Day of Week
       * Display Form ID: customer_created_date.dayOfWeek
       */,
      Default: newAttribute("customer_created_date.dayOfWeek"),
    }
    /**
     * Date Attribute: Customer created date - Day of Month
     * Date Attribute ID: customer_created_date.dayOfMonth
     */,
    CustomerCreatedDateDayOfMonth: {
      ref: idRef("customer_created_date.dayOfMonth", "attribute"),
      identifier: "customer_created_date.dayOfMonth"
      /**
       * Display Form Title: Customer created date - Day of Month
       * Display Form ID: customer_created_date.dayOfMonth
       */,
      Default: newAttribute("customer_created_date.dayOfMonth"),
    }
    /**
     * Date Attribute: Customer created date - Day of Year
     * Date Attribute ID: customer_created_date.dayOfYear
     */,
    CustomerCreatedDateDayOfYear: {
      ref: idRef("customer_created_date.dayOfYear", "attribute"),
      identifier: "customer_created_date.dayOfYear"
      /**
       * Display Form Title: Customer created date - Day of Year
       * Display Form ID: customer_created_date.dayOfYear
       */,
      Default: newAttribute("customer_created_date.dayOfYear"),
    }
    /**
     * Date Attribute: Customer created date - Week of Year
     * Date Attribute ID: customer_created_date.weekOfYear
     */,
    CustomerCreatedDateWeekOfYear: {
      ref: idRef("customer_created_date.weekOfYear", "attribute"),
      identifier: "customer_created_date.weekOfYear"
      /**
       * Display Form Title: Customer created date - Week of Year
       * Display Form ID: customer_created_date.weekOfYear
       */,
      Default: newAttribute("customer_created_date.weekOfYear"),
    }
    /**
     * Date Attribute: Customer created date - Month of Year
     * Date Attribute ID: customer_created_date.monthOfYear
     */,
    CustomerCreatedDateMonthOfYear: {
      ref: idRef("customer_created_date.monthOfYear", "attribute"),
      identifier: "customer_created_date.monthOfYear"
      /**
       * Display Form Title: Customer created date - Month of Year
       * Display Form ID: customer_created_date.monthOfYear
       */,
      Default: newAttribute("customer_created_date.monthOfYear"),
    }
    /**
     * Date Attribute: Customer created date - Quarter of Year
     * Date Attribute ID: customer_created_date.quarterOfYear
     */,
    CustomerCreatedDateQuarterOfYear: {
      ref: idRef("customer_created_date.quarterOfYear", "attribute"),
      identifier: "customer_created_date.quarterOfYear"
      /**
       * Display Form Title: Customer created date - Quarter of Year
       * Display Form ID: customer_created_date.quarterOfYear
       */,
      Default: newAttribute("customer_created_date.quarterOfYear"),
    },
  }
  /**
   * Date Data Set Title: Date
   * Date Data Set ID: date
   */,
  Date: {
    ref: idRef("date", "dataSet"),
    identifier: "date"
    /**
     * Date Attribute: Date - Minute
     * Date Attribute ID: date.minute
     */,
    DateMinute: {
      ref: idRef("date.minute", "attribute"),
      identifier: "date.minute"
      /**
       * Display Form Title: Date - Minute
       * Display Form ID: date.minute
       */,
      Default: newAttribute("date.minute"),
    }
    /**
     * Date Attribute: Date - Hour
     * Date Attribute ID: date.hour
     */,
    DateHour: {
      ref: idRef("date.hour", "attribute"),
      identifier: "date.hour"
      /**
       * Display Form Title: Date - Hour
       * Display Form ID: date.hour
       */,
      Default: newAttribute("date.hour"),
    }
    /**
     * Date Attribute: Date - Date
     * Date Attribute ID: date.day
     */,
    DateDate: {
      ref: idRef("date.day", "attribute"),
      identifier: "date.day"
      /**
       * Display Form Title: Date - Date
       * Display Form ID: date.day
       */,
      Default: newAttribute("date.day"),
    }
    /**
     * Date Attribute: Date - Week/Year
     * Date Attribute ID: date.week
     */,
    DateWeekYear: {
      ref: idRef("date.week", "attribute"),
      identifier: "date.week"
      /**
       * Display Form Title: Date - Week/Year
       * Display Form ID: date.week
       */,
      Default: newAttribute("date.week"),
    }
    /**
     * Date Attribute: Date - Month/Year
     * Date Attribute ID: date.month
     */,
    DateMonthYear: {
      ref: idRef("date.month", "attribute"),
      identifier: "date.month"
      /**
       * Display Form Title: Date - Month/Year
       * Display Form ID: date.month
       */,
      Default: newAttribute("date.month"),
    }
    /**
     * Date Attribute: Date - Quarter/Year
     * Date Attribute ID: date.quarter
     */,
    DateQuarterYear: {
      ref: idRef("date.quarter", "attribute"),
      identifier: "date.quarter"
      /**
       * Display Form Title: Date - Quarter/Year
       * Display Form ID: date.quarter
       */,
      Default: newAttribute("date.quarter"),
    }
    /**
     * Date Attribute: Date - Year
     * Date Attribute ID: date.year
     */,
    DateYear: {
      ref: idRef("date.year", "attribute"),
      identifier: "date.year"
      /**
       * Display Form Title: Date - Year
       * Display Form ID: date.year
       */,
      Default: newAttribute("date.year"),
    }
    /**
     * Date Attribute: Date - Minute of Hour
     * Date Attribute ID: date.minuteOfHour
     */,
    DateMinuteOfHour: {
      ref: idRef("date.minuteOfHour", "attribute"),
      identifier: "date.minuteOfHour"
      /**
       * Display Form Title: Date - Minute of Hour
       * Display Form ID: date.minuteOfHour
       */,
      Default: newAttribute("date.minuteOfHour"),
    }
    /**
     * Date Attribute: Date - Hour of Day
     * Date Attribute ID: date.hourOfDay
     */,
    DateHourOfDay: {
      ref: idRef("date.hourOfDay", "attribute"),
      identifier: "date.hourOfDay"
      /**
       * Display Form Title: Date - Hour of Day
       * Display Form ID: date.hourOfDay
       */,
      Default: newAttribute("date.hourOfDay"),
    }
    /**
     * Date Attribute: Date - Day of Week
     * Date Attribute ID: date.dayOfWeek
     */,
    DateDayOfWeek: {
      ref: idRef("date.dayOfWeek", "attribute"),
      identifier: "date.dayOfWeek"
      /**
       * Display Form Title: Date - Day of Week
       * Display Form ID: date.dayOfWeek
       */,
      Default: newAttribute("date.dayOfWeek"),
    }
    /**
     * Date Attribute: Date - Day of Month
     * Date Attribute ID: date.dayOfMonth
     */,
    DateDayOfMonth: {
      ref: idRef("date.dayOfMonth", "attribute"),
      identifier: "date.dayOfMonth"
      /**
       * Display Form Title: Date - Day of Month
       * Display Form ID: date.dayOfMonth
       */,
      Default: newAttribute("date.dayOfMonth"),
    }
    /**
     * Date Attribute: Date - Day of Year
     * Date Attribute ID: date.dayOfYear
     */,
    DateDayOfYear: {
      ref: idRef("date.dayOfYear", "attribute"),
      identifier: "date.dayOfYear"
      /**
       * Display Form Title: Date - Day of Year
       * Display Form ID: date.dayOfYear
       */,
      Default: newAttribute("date.dayOfYear"),
    }
    /**
     * Date Attribute: Date - Week of Year
     * Date Attribute ID: date.weekOfYear
     */,
    DateWeekOfYear: {
      ref: idRef("date.weekOfYear", "attribute"),
      identifier: "date.weekOfYear"
      /**
       * Display Form Title: Date - Week of Year
       * Display Form ID: date.weekOfYear
       */,
      Default: newAttribute("date.weekOfYear"),
    }
    /**
     * Date Attribute: Date - Month of Year
     * Date Attribute ID: date.monthOfYear
     */,
    DateMonthOfYear: {
      ref: idRef("date.monthOfYear", "attribute"),
      identifier: "date.monthOfYear"
      /**
       * Display Form Title: Date - Month of Year
       * Display Form ID: date.monthOfYear
       */,
      Default: newAttribute("date.monthOfYear"),
    }
    /**
     * Date Attribute: Date - Quarter of Year
     * Date Attribute ID: date.quarterOfYear
     */,
    DateQuarterOfYear: {
      ref: idRef("date.quarterOfYear", "attribute"),
      identifier: "date.quarterOfYear"
      /**
       * Display Form Title: Date - Quarter of Year
       * Display Form ID: date.quarterOfYear
       */,
      Default: newAttribute("date.quarterOfYear"),
    },
  }
  /**
   * Date Data Set Title: Imventory month
   * Date Data Set ID: imventory_month
   */,
  ImventoryMonth: {
    ref: idRef("imventory_month", "dataSet"),
    identifier: "imventory_month"
    /**
     * Date Attribute: Imventory month - Minute
     * Date Attribute ID: imventory_month.minute
     */,
    ImventoryMonthMinute: {
      ref: idRef("imventory_month.minute", "attribute"),
      identifier: "imventory_month.minute"
      /**
       * Display Form Title: Imventory month - Minute
       * Display Form ID: imventory_month.minute
       */,
      Default: newAttribute("imventory_month.minute"),
    }
    /**
     * Date Attribute: Imventory month - Hour
     * Date Attribute ID: imventory_month.hour
     */,
    ImventoryMonthHour: {
      ref: idRef("imventory_month.hour", "attribute"),
      identifier: "imventory_month.hour"
      /**
       * Display Form Title: Imventory month - Hour
       * Display Form ID: imventory_month.hour
       */,
      Default: newAttribute("imventory_month.hour"),
    }
    /**
     * Date Attribute: Imventory month - Date
     * Date Attribute ID: imventory_month.day
     */,
    ImventoryMonthDate: {
      ref: idRef("imventory_month.day", "attribute"),
      identifier: "imventory_month.day"
      /**
       * Display Form Title: Imventory month - Date
       * Display Form ID: imventory_month.day
       */,
      Default: newAttribute("imventory_month.day"),
    }
    /**
     * Date Attribute: Imventory month - Week/Year
     * Date Attribute ID: imventory_month.week
     */,
    ImventoryMonthWeekYear: {
      ref: idRef("imventory_month.week", "attribute"),
      identifier: "imventory_month.week"
      /**
       * Display Form Title: Imventory month - Week/Year
       * Display Form ID: imventory_month.week
       */,
      Default: newAttribute("imventory_month.week"),
    }
    /**
     * Date Attribute: Imventory month - Month/Year
     * Date Attribute ID: imventory_month.month
     */,
    ImventoryMonthMonthYear: {
      ref: idRef("imventory_month.month", "attribute"),
      identifier: "imventory_month.month"
      /**
       * Display Form Title: Imventory month - Month/Year
       * Display Form ID: imventory_month.month
       */,
      Default: newAttribute("imventory_month.month"),
    }
    /**
     * Date Attribute: Imventory month - Quarter/Year
     * Date Attribute ID: imventory_month.quarter
     */,
    ImventoryMonthQuarterYear: {
      ref: idRef("imventory_month.quarter", "attribute"),
      identifier: "imventory_month.quarter"
      /**
       * Display Form Title: Imventory month - Quarter/Year
       * Display Form ID: imventory_month.quarter
       */,
      Default: newAttribute("imventory_month.quarter"),
    }
    /**
     * Date Attribute: Imventory month - Year
     * Date Attribute ID: imventory_month.year
     */,
    ImventoryMonthYear: {
      ref: idRef("imventory_month.year", "attribute"),
      identifier: "imventory_month.year"
      /**
       * Display Form Title: Imventory month - Year
       * Display Form ID: imventory_month.year
       */,
      Default: newAttribute("imventory_month.year"),
    }
    /**
     * Date Attribute: Imventory month - Minute of Hour
     * Date Attribute ID: imventory_month.minuteOfHour
     */,
    ImventoryMonthMinuteOfHour: {
      ref: idRef("imventory_month.minuteOfHour", "attribute"),
      identifier: "imventory_month.minuteOfHour"
      /**
       * Display Form Title: Imventory month - Minute of Hour
       * Display Form ID: imventory_month.minuteOfHour
       */,
      Default: newAttribute("imventory_month.minuteOfHour"),
    }
    /**
     * Date Attribute: Imventory month - Hour of Day
     * Date Attribute ID: imventory_month.hourOfDay
     */,
    ImventoryMonthHourOfDay: {
      ref: idRef("imventory_month.hourOfDay", "attribute"),
      identifier: "imventory_month.hourOfDay"
      /**
       * Display Form Title: Imventory month - Hour of Day
       * Display Form ID: imventory_month.hourOfDay
       */,
      Default: newAttribute("imventory_month.hourOfDay"),
    }
    /**
     * Date Attribute: Imventory month - Day of Week
     * Date Attribute ID: imventory_month.dayOfWeek
     */,
    ImventoryMonthDayOfWeek: {
      ref: idRef("imventory_month.dayOfWeek", "attribute"),
      identifier: "imventory_month.dayOfWeek"
      /**
       * Display Form Title: Imventory month - Day of Week
       * Display Form ID: imventory_month.dayOfWeek
       */,
      Default: newAttribute("imventory_month.dayOfWeek"),
    }
    /**
     * Date Attribute: Imventory month - Day of Month
     * Date Attribute ID: imventory_month.dayOfMonth
     */,
    ImventoryMonthDayOfMonth: {
      ref: idRef("imventory_month.dayOfMonth", "attribute"),
      identifier: "imventory_month.dayOfMonth"
      /**
       * Display Form Title: Imventory month - Day of Month
       * Display Form ID: imventory_month.dayOfMonth
       */,
      Default: newAttribute("imventory_month.dayOfMonth"),
    }
    /**
     * Date Attribute: Imventory month - Day of Year
     * Date Attribute ID: imventory_month.dayOfYear
     */,
    ImventoryMonthDayOfYear: {
      ref: idRef("imventory_month.dayOfYear", "attribute"),
      identifier: "imventory_month.dayOfYear"
      /**
       * Display Form Title: Imventory month - Day of Year
       * Display Form ID: imventory_month.dayOfYear
       */,
      Default: newAttribute("imventory_month.dayOfYear"),
    }
    /**
     * Date Attribute: Imventory month - Week of Year
     * Date Attribute ID: imventory_month.weekOfYear
     */,
    ImventoryMonthWeekOfYear: {
      ref: idRef("imventory_month.weekOfYear", "attribute"),
      identifier: "imventory_month.weekOfYear"
      /**
       * Display Form Title: Imventory month - Week of Year
       * Display Form ID: imventory_month.weekOfYear
       */,
      Default: newAttribute("imventory_month.weekOfYear"),
    }
    /**
     * Date Attribute: Imventory month - Month of Year
     * Date Attribute ID: imventory_month.monthOfYear
     */,
    ImventoryMonthMonthOfYear: {
      ref: idRef("imventory_month.monthOfYear", "attribute"),
      identifier: "imventory_month.monthOfYear"
      /**
       * Display Form Title: Imventory month - Month of Year
       * Display Form ID: imventory_month.monthOfYear
       */,
      Default: newAttribute("imventory_month.monthOfYear"),
    }
    /**
     * Date Attribute: Imventory month - Quarter of Year
     * Date Attribute ID: imventory_month.quarterOfYear
     */,
    ImventoryMonthQuarterOfYear: {
      ref: idRef("imventory_month.quarterOfYear", "attribute"),
      identifier: "imventory_month.quarterOfYear"
      /**
       * Display Form Title: Imventory month - Quarter of Year
       * Display Form ID: imventory_month.quarterOfYear
       */,
      Default: newAttribute("imventory_month.quarterOfYear"),
    },
  }
  /**
   * Date Data Set Title: Order date
   * Date Data Set ID: order_date
   */,
  OrderDate: {
    ref: idRef("order_date", "dataSet"),
    identifier: "order_date"
    /**
     * Date Attribute: Order date - Minute
     * Date Attribute ID: order_date.minute
     */,
    OrderDateMinute: {
      ref: idRef("order_date.minute", "attribute"),
      identifier: "order_date.minute"
      /**
       * Display Form Title: Order date - Minute
       * Display Form ID: order_date.minute
       */,
      Default: newAttribute("order_date.minute"),
    }
    /**
     * Date Attribute: Order date - Hour
     * Date Attribute ID: order_date.hour
     */,
    OrderDateHour: {
      ref: idRef("order_date.hour", "attribute"),
      identifier: "order_date.hour"
      /**
       * Display Form Title: Order date - Hour
       * Display Form ID: order_date.hour
       */,
      Default: newAttribute("order_date.hour"),
    }
    /**
     * Date Attribute: Order date - Date
     * Date Attribute ID: order_date.day
     */,
    OrderDateDate: {
      ref: idRef("order_date.day", "attribute"),
      identifier: "order_date.day"
      /**
       * Display Form Title: Order date - Date
       * Display Form ID: order_date.day
       */,
      Default: newAttribute("order_date.day"),
    }
    /**
     * Date Attribute: Order date - Week/Year
     * Date Attribute ID: order_date.week
     */,
    OrderDateWeekYear: {
      ref: idRef("order_date.week", "attribute"),
      identifier: "order_date.week"
      /**
       * Display Form Title: Order date - Week/Year
       * Display Form ID: order_date.week
       */,
      Default: newAttribute("order_date.week"),
    }
    /**
     * Date Attribute: Order date - Month/Year
     * Date Attribute ID: order_date.month
     */,
    OrderDateMonthYear: {
      ref: idRef("order_date.month", "attribute"),
      identifier: "order_date.month"
      /**
       * Display Form Title: Order date - Month/Year
       * Display Form ID: order_date.month
       */,
      Default: newAttribute("order_date.month"),
    }
    /**
     * Date Attribute: Order date - Quarter/Year
     * Date Attribute ID: order_date.quarter
     */,
    OrderDateQuarterYear: {
      ref: idRef("order_date.quarter", "attribute"),
      identifier: "order_date.quarter"
      /**
       * Display Form Title: Order date - Quarter/Year
       * Display Form ID: order_date.quarter
       */,
      Default: newAttribute("order_date.quarter"),
    }
    /**
     * Date Attribute: Order date - Year
     * Date Attribute ID: order_date.year
     */,
    OrderDateYear: {
      ref: idRef("order_date.year", "attribute"),
      identifier: "order_date.year"
      /**
       * Display Form Title: Order date - Year
       * Display Form ID: order_date.year
       */,
      Default: newAttribute("order_date.year"),
    }
    /**
     * Date Attribute: Order date - Minute of Hour
     * Date Attribute ID: order_date.minuteOfHour
     */,
    OrderDateMinuteOfHour: {
      ref: idRef("order_date.minuteOfHour", "attribute"),
      identifier: "order_date.minuteOfHour"
      /**
       * Display Form Title: Order date - Minute of Hour
       * Display Form ID: order_date.minuteOfHour
       */,
      Default: newAttribute("order_date.minuteOfHour"),
    }
    /**
     * Date Attribute: Order date - Hour of Day
     * Date Attribute ID: order_date.hourOfDay
     */,
    OrderDateHourOfDay: {
      ref: idRef("order_date.hourOfDay", "attribute"),
      identifier: "order_date.hourOfDay"
      /**
       * Display Form Title: Order date - Hour of Day
       * Display Form ID: order_date.hourOfDay
       */,
      Default: newAttribute("order_date.hourOfDay"),
    }
    /**
     * Date Attribute: Order date - Day of Week
     * Date Attribute ID: order_date.dayOfWeek
     */,
    OrderDateDayOfWeek: {
      ref: idRef("order_date.dayOfWeek", "attribute"),
      identifier: "order_date.dayOfWeek"
      /**
       * Display Form Title: Order date - Day of Week
       * Display Form ID: order_date.dayOfWeek
       */,
      Default: newAttribute("order_date.dayOfWeek"),
    }
    /**
     * Date Attribute: Order date - Day of Month
     * Date Attribute ID: order_date.dayOfMonth
     */,
    OrderDateDayOfMonth: {
      ref: idRef("order_date.dayOfMonth", "attribute"),
      identifier: "order_date.dayOfMonth"
      /**
       * Display Form Title: Order date - Day of Month
       * Display Form ID: order_date.dayOfMonth
       */,
      Default: newAttribute("order_date.dayOfMonth"),
    }
    /**
     * Date Attribute: Order date - Day of Year
     * Date Attribute ID: order_date.dayOfYear
     */,
    OrderDateDayOfYear: {
      ref: idRef("order_date.dayOfYear", "attribute"),
      identifier: "order_date.dayOfYear"
      /**
       * Display Form Title: Order date - Day of Year
       * Display Form ID: order_date.dayOfYear
       */,
      Default: newAttribute("order_date.dayOfYear"),
    }
    /**
     * Date Attribute: Order date - Week of Year
     * Date Attribute ID: order_date.weekOfYear
     */,
    OrderDateWeekOfYear: {
      ref: idRef("order_date.weekOfYear", "attribute"),
      identifier: "order_date.weekOfYear"
      /**
       * Display Form Title: Order date - Week of Year
       * Display Form ID: order_date.weekOfYear
       */,
      Default: newAttribute("order_date.weekOfYear"),
    }
    /**
     * Date Attribute: Order date - Month of Year
     * Date Attribute ID: order_date.monthOfYear
     */,
    OrderDateMonthOfYear: {
      ref: idRef("order_date.monthOfYear", "attribute"),
      identifier: "order_date.monthOfYear"
      /**
       * Display Form Title: Order date - Month of Year
       * Display Form ID: order_date.monthOfYear
       */,
      Default: newAttribute("order_date.monthOfYear"),
    }
    /**
     * Date Attribute: Order date - Quarter of Year
     * Date Attribute ID: order_date.quarterOfYear
     */,
    OrderDateQuarterOfYear: {
      ref: idRef("order_date.quarterOfYear", "attribute"),
      identifier: "order_date.quarterOfYear"
      /**
       * Display Form Title: Order date - Quarter of Year
       * Display Form ID: order_date.quarterOfYear
       */,
      Default: newAttribute("order_date.quarterOfYear"),
    },
  }
  /**
   * Date Data Set Title: Return date
   * Date Data Set ID: return_date
   */,
  ReturnDate: {
    ref: idRef("return_date", "dataSet"),
    identifier: "return_date"
    /**
     * Date Attribute: Return date - Minute
     * Date Attribute ID: return_date.minute
     */,
    ReturnDateMinute: {
      ref: idRef("return_date.minute", "attribute"),
      identifier: "return_date.minute"
      /**
       * Display Form Title: Return date - Minute
       * Display Form ID: return_date.minute
       */,
      Default: newAttribute("return_date.minute"),
    }
    /**
     * Date Attribute: Return date - Hour
     * Date Attribute ID: return_date.hour
     */,
    ReturnDateHour: {
      ref: idRef("return_date.hour", "attribute"),
      identifier: "return_date.hour"
      /**
       * Display Form Title: Return date - Hour
       * Display Form ID: return_date.hour
       */,
      Default: newAttribute("return_date.hour"),
    }
    /**
     * Date Attribute: Return date - Date
     * Date Attribute ID: return_date.day
     */,
    ReturnDateDate: {
      ref: idRef("return_date.day", "attribute"),
      identifier: "return_date.day"
      /**
       * Display Form Title: Return date - Date
       * Display Form ID: return_date.day
       */,
      Default: newAttribute("return_date.day"),
    }
    /**
     * Date Attribute: Return date - Week/Year
     * Date Attribute ID: return_date.week
     */,
    ReturnDateWeekYear: {
      ref: idRef("return_date.week", "attribute"),
      identifier: "return_date.week"
      /**
       * Display Form Title: Return date - Week/Year
       * Display Form ID: return_date.week
       */,
      Default: newAttribute("return_date.week"),
    }
    /**
     * Date Attribute: Return date - Month/Year
     * Date Attribute ID: return_date.month
     */,
    ReturnDateMonthYear: {
      ref: idRef("return_date.month", "attribute"),
      identifier: "return_date.month"
      /**
       * Display Form Title: Return date - Month/Year
       * Display Form ID: return_date.month
       */,
      Default: newAttribute("return_date.month"),
    }
    /**
     * Date Attribute: Return date - Quarter/Year
     * Date Attribute ID: return_date.quarter
     */,
    ReturnDateQuarterYear: {
      ref: idRef("return_date.quarter", "attribute"),
      identifier: "return_date.quarter"
      /**
       * Display Form Title: Return date - Quarter/Year
       * Display Form ID: return_date.quarter
       */,
      Default: newAttribute("return_date.quarter"),
    }
    /**
     * Date Attribute: Return date - Year
     * Date Attribute ID: return_date.year
     */,
    ReturnDateYear: {
      ref: idRef("return_date.year", "attribute"),
      identifier: "return_date.year"
      /**
       * Display Form Title: Return date - Year
       * Display Form ID: return_date.year
       */,
      Default: newAttribute("return_date.year"),
    }
    /**
     * Date Attribute: Return date - Minute of Hour
     * Date Attribute ID: return_date.minuteOfHour
     */,
    ReturnDateMinuteOfHour: {
      ref: idRef("return_date.minuteOfHour", "attribute"),
      identifier: "return_date.minuteOfHour"
      /**
       * Display Form Title: Return date - Minute of Hour
       * Display Form ID: return_date.minuteOfHour
       */,
      Default: newAttribute("return_date.minuteOfHour"),
    }
    /**
     * Date Attribute: Return date - Hour of Day
     * Date Attribute ID: return_date.hourOfDay
     */,
    ReturnDateHourOfDay: {
      ref: idRef("return_date.hourOfDay", "attribute"),
      identifier: "return_date.hourOfDay"
      /**
       * Display Form Title: Return date - Hour of Day
       * Display Form ID: return_date.hourOfDay
       */,
      Default: newAttribute("return_date.hourOfDay"),
    }
    /**
     * Date Attribute: Return date - Day of Week
     * Date Attribute ID: return_date.dayOfWeek
     */,
    ReturnDateDayOfWeek: {
      ref: idRef("return_date.dayOfWeek", "attribute"),
      identifier: "return_date.dayOfWeek"
      /**
       * Display Form Title: Return date - Day of Week
       * Display Form ID: return_date.dayOfWeek
       */,
      Default: newAttribute("return_date.dayOfWeek"),
    }
    /**
     * Date Attribute: Return date - Day of Month
     * Date Attribute ID: return_date.dayOfMonth
     */,
    ReturnDateDayOfMonth: {
      ref: idRef("return_date.dayOfMonth", "attribute"),
      identifier: "return_date.dayOfMonth"
      /**
       * Display Form Title: Return date - Day of Month
       * Display Form ID: return_date.dayOfMonth
       */,
      Default: newAttribute("return_date.dayOfMonth"),
    }
    /**
     * Date Attribute: Return date - Day of Year
     * Date Attribute ID: return_date.dayOfYear
     */,
    ReturnDateDayOfYear: {
      ref: idRef("return_date.dayOfYear", "attribute"),
      identifier: "return_date.dayOfYear"
      /**
       * Display Form Title: Return date - Day of Year
       * Display Form ID: return_date.dayOfYear
       */,
      Default: newAttribute("return_date.dayOfYear"),
    }
    /**
     * Date Attribute: Return date - Week of Year
     * Date Attribute ID: return_date.weekOfYear
     */,
    ReturnDateWeekOfYear: {
      ref: idRef("return_date.weekOfYear", "attribute"),
      identifier: "return_date.weekOfYear"
      /**
       * Display Form Title: Return date - Week of Year
       * Display Form ID: return_date.weekOfYear
       */,
      Default: newAttribute("return_date.weekOfYear"),
    }
    /**
     * Date Attribute: Return date - Month of Year
     * Date Attribute ID: return_date.monthOfYear
     */,
    ReturnDateMonthOfYear: {
      ref: idRef("return_date.monthOfYear", "attribute"),
      identifier: "return_date.monthOfYear"
      /**
       * Display Form Title: Return date - Month of Year
       * Display Form ID: return_date.monthOfYear
       */,
      Default: newAttribute("return_date.monthOfYear"),
    }
    /**
     * Date Attribute: Return date - Quarter of Year
     * Date Attribute ID: return_date.quarterOfYear
     */,
    ReturnDateQuarterOfYear: {
      ref: idRef("return_date.quarterOfYear", "attribute"),
      identifier: "return_date.quarterOfYear"
      /**
       * Display Form Title: Return date - Quarter of Year
       * Display Form ID: return_date.quarterOfYear
       */,
      Default: newAttribute("return_date.quarterOfYear"),
    },
  },
};
export const Insights = {
  /**
   * Insight Title: Gross Profit Margin
   * Insight ID: 03b89e08-ee06-4e1f-88d8-bbd805c691cc
   */
  GrossProfitMargin_1: "03b89e08-ee06-4e1f-88d8-bbd805c691cc"
  /**
   * Insight Title: Net Sales by Product Category Seasonality
   * Insight ID: 09a05f3f-d0cd-423a-8844-eba4ba7ca0c4
   */,
  NetSalesByProductCategorySeasonality: "09a05f3f-d0cd-423a-8844-eba4ba7ca0c4"
  /**
   * Insight Title: Sales per Customer
   * Insight ID: 0c7ac154-1766-4d54-ba2b-b6f6913a59dd
   */,
  SalesPerCustomer: "0c7ac154-1766-4d54-ba2b-b6f6913a59dd"
  /**
   * Insight Title: Order details
   * Insight ID: 1b9ce816-a4f9-4301-bdfd-d36c6a7a71b6
   */,
  OrderDetails: "1b9ce816-a4f9-4301-bdfd-d36c6a7a71b6"
  /**
   * Insight Title: Total sales over time
   * Insight ID: 25bdccd8-ef39-40a5-a224-6031d0ab470c
   */,
  TotalSalesOverTime: "25bdccd8-ef39-40a5-a224-6031d0ab470c"
  /**
   * Insight Title: Net Sales vs Orders
   * Insight ID: 2da13424-2a6b-4ed4-916c-9bbc002fdd1b
   */,
  NetSalesVsOrders: "2da13424-2a6b-4ed4-916c-9bbc002fdd1b"
  /**
   * Insight Title: Customers by Country and State
   * Insight ID: 2f12ace7-e626-47f1-953d-5ae957ca108e
   */,
  CustomersByCountryAndState: "2f12ace7-e626-47f1-953d-5ae957ca108e"
  /**
   * Insight Title: Customers Geo chart
   * Insight ID: 3895bb55-4ddf-4d7e-96ed-7178009fd34e
   */,
  CustomersGeoChart: "3895bb55-4ddf-4d7e-96ed-7178009fd34e"
  /**
   * Insight Title: Orders Paid
   * Insight ID: 3ac5e106-b43e-4c87-9ef0-9315e02282bd
   */,
  OrdersPaid: "3ac5e106-b43e-4c87-9ef0-9315e02282bd"
  /**
   * Insight Title: Revenue Trend
   * Insight ID: 3e16ebe3-7753-40c6-abc1-f549e7bf4d6c
   */,
  RevenueTrend: "3e16ebe3-7753-40c6-abc1-f549e7bf4d6c"
  /**
   * Insight Title: Brands by Gross Profit and Avg Price of Product
   * Insight ID: 405034d6-ab9c-462a-a88e-3172598adc65
   */,
  BrandsByGrossProfitAndAvgPriceOfProduct: "405034d6-ab9c-462a-a88e-3172598adc65"
  /**
   * Insight Title: Total sales breakdown
   * Insight ID: 41a8d4c3-1ab6-4bab-b531-5893912e9b93
   */,
  TotalSalesBreakdown: "41a8d4c3-1ab6-4bab-b531-5893912e9b93"
  /**
   * Insight Title: Sales detail
   * Insight ID: 469e8936-ca67-4987-8c70-0e35be24be4d
   */,
  SalesDetail: "469e8936-ca67-4987-8c70-0e35be24be4d"
  /**
   * Insight Title: New vs Returning Trend
   * Insight ID: 48000537-4586-4a1e-a9a5-8eda7f8151a8
   */,
  NewVsReturningTrend: "48000537-4586-4a1e-a9a5-8eda7f8151a8"
  /**
   * Insight Title: Gross Profit Margin - USA
   * Insight ID: 4912f2c4-5e81-4b97-9fff-6f18aff5aec2
   */,
  GrossProfitMarginUSA: "4912f2c4-5e81-4b97-9fff-6f18aff5aec2"
  /**
   * Insight Title: Return Customers
   * Insight ID: 4cea4177-37c5-4196-8aab-c6bf60dc1f22
   */,
  ReturnCustomers_1: "4cea4177-37c5-4196-8aab-c6bf60dc1f22"
  /**
   * Insight Title: Gross Profit Margin Detail
   * Insight ID: 5297352c-7fd3-4e7e-90ad-026e470f55bd
   */,
  GrossProfitMarginDetail: "5297352c-7fd3-4e7e-90ad-026e470f55bd"
  /**
   * Insight Title: Customer Detail
   * Insight ID: 543cadbb-10b4-4153-b810-52586df7aa0e
   */,
  CustomerDetail: "543cadbb-10b4-4153-b810-52586df7aa0e"
  /**
   * Insight Title: Customers by State
   * Insight ID: 544ee04b-7fcc-41a3-8323-852de0613815
   */,
  CustomersByState: "544ee04b-7fcc-41a3-8323-852de0613815"
  /**
   * Insight Title: Top 10 Sellers
   * Insight ID: 603bbd58-ea50-4607-ad20-418bd95c06c8
   */,
  Top10Sellers: "603bbd58-ea50-4607-ad20-418bd95c06c8"
  /**
   * Insight Title: Top 10 Spenders
   * Insight ID: 607e9724-37ed-44f6-9fb4-55676d58df6e
   */,
  Top10Spenders: "607e9724-37ed-44f6-9fb4-55676d58df6e"
  /**
   * Insight Title: Net sales over time
   * Insight ID: 60dd3592-1322-4260-aaad-bd51cdcb1343
   */,
  NetSalesOverTime: "60dd3592-1322-4260-aaad-bd51cdcb1343"
  /**
   * Insight Title: Net Sales Breakdown
   * Insight ID: 643699f3-f980-44f6-b618-4b3d3f3f560e
   */,
  NetSalesBreakdown: "643699f3-f980-44f6-b618-4b3d3f3f560e"
  /**
   * Insight Title: Product detail
   * Insight ID: 65120fa4-2805-4f70-b576-01d138117cf4
   */,
  ProductDetail: "65120fa4-2805-4f70-b576-01d138117cf4"
  /**
   * Insight Title: Sales Goal
   * Insight ID: 68ddf963-edce-4f88-a8d5-09bf3825b124
   */,
  SalesGoal: "68ddf963-edce-4f88-a8d5-09bf3825b124"
  /**
   * Insight Title: USA Polygon map plugin
   * Insight ID: 6935998e-05ce-45a6-a4cf-47d65fa0f319
   */,
  USAPolygonMapPlugin: "6935998e-05ce-45a6-a4cf-47d65fa0f319"
  /**
   * Insight Title: Net Sales by Product Category
   * Insight ID: 6e336114-d0b6-4287-acc4-be6e39e13e30
   */,
  NetSalesByProductCategory: "6e336114-d0b6-4287-acc4-be6e39e13e30"
  /**
   * Insight Title: Net Sales
   * Insight ID: 700d732d-67e1-4658-a6e0-c6b8edbb6d49
   */,
  NetSales_1: "700d732d-67e1-4658-a6e0-c6b8edbb6d49"
  /**
   * Insight Title: Net Sales - USA
   * Insight ID: 7196b241-911e-472e-a400-24c7ad338b29
   */,
  NetSalesUSA: "7196b241-911e-472e-a400-24c7ad338b29"
  /**
   * Insight Title: Active Customers by Month
   * Insight ID: 75dc0cee-09c2-46e2-b39c-d15cedaf3692
   */,
  ActiveCustomersByMonth: "75dc0cee-09c2-46e2-b39c-d15cedaf3692"
  /**
   * Insight Title: Top 10 Money Makers
   * Insight ID: 7b49dbdb-f9ab-41dd-9cb4-cd13627d67c3
   */,
  Top10MoneyMakers: "7b49dbdb-f9ab-41dd-9cb4-cd13627d67c3"
  /**
   * Insight Title: Active Customers Breakdown
   * Insight ID: 7de6202d-2e52-4bed-9e80-6c3ce8cedaaa
   */,
  ActiveCustomersBreakdown: "7de6202d-2e52-4bed-9e80-6c3ce8cedaaa"
  /**
   * Insight Title: Total Sales
   * Insight ID: 86193049-01b6-438d-bd13-070b71459147
   */,
  TotalSales_1: "86193049-01b6-438d-bd13-070b71459147"
  /**
   * Insight Title: Active Customers - USA
   * Insight ID: 88378c1e-061d-462d-82eb-7c622dbb9390
   */,
  ActiveCustomersUSA: "88378c1e-061d-462d-82eb-7c622dbb9390"
  /**
   * Insight Title: Top 10 Buyers
   * Insight ID: 8e8f236e-1bb2-48b3-828e-48706c684629
   */,
  Top10Buyers: "8e8f236e-1bb2-48b3-828e-48706c684629"
  /**
   * Insight Title: Gross Profit Trend
   * Insight ID: 9570eab0-b451-48be-9e24-3c106fe898a2
   */,
  GrossProfitTrend: "9570eab0-b451-48be-9e24-3c106fe898a2"
  /**
   * Insight Title: Customers by State (on Overview)
   * Insight ID: 996ccc2e-8f9e-4525-be61-2f3152ff8ce9
   */,
  CustomersByStateOnOverview: "996ccc2e-8f9e-4525-be61-2f3152ff8ce9"
  /**
   * Insight Title: Total customers
   * Insight ID: 9f2a657a-22e1-4791-8216-7a354bb8de5d
   */,
  TotalCustomers_1: "9f2a657a-22e1-4791-8216-7a354bb8de5d"
  /**
   * Insight Title: Total Sales Trend
   * Insight ID: a178265c-53ba-4c15-8c1f-d7e168506c92
   */,
  TotalSalesTrend: "a178265c-53ba-4c15-8c1f-d7e168506c92"
  /**
   * Insight Title: Orders over time
   * Insight ID: a2b50fff-c7eb-444c-95e6-67037d2544d6
   */,
  OrdersOverTime: "a2b50fff-c7eb-444c-95e6-67037d2544d6"
  /**
   * Insight Title: New Customers
   * Insight ID: a347814a-a893-4354-915d-29699b92a6d7
   */,
  NewCustomers_1: "a347814a-a893-4354-915d-29699b92a6d7"
  /**
   * Insight Title: Top 10 States
   * Insight ID: ac004949-ad4d-4678-b03a-2756e3d6a4e3
   */,
  Top10States: "ac004949-ad4d-4678-b03a-2756e3d6a4e3"
  /**
   * Insight Title: Total Sales
   * Insight ID: adf2b786-32bd-4864-b251-7e2cfe9a006f
   */,
  TotalSales_2: "adf2b786-32bd-4864-b251-7e2cfe9a006f"
  /**
   * Insight Title: Order breakdown
   * Insight ID: b4497110-8d8a-4ab3-9cd5-471b60d8e561
   */,
  OrderBreakdown: "b4497110-8d8a-4ab3-9cd5-471b60d8e561"
  /**
   * Insight Title: Gross Profit
   * Insight ID: b666412b-3c13-4e80-9b3f-7787558aa3ce
   */,
  GrossProfit_1: "b666412b-3c13-4e80-9b3f-7787558aa3ce"
  /**
   * Insight Title: Active Customers by Hour
   * Insight ID: cc858402-0650-444e-947a-1e8dfc888435
   */,
  ActiveCustomersByHour: "cc858402-0650-444e-947a-1e8dfc888435"
  /**
   * Insight Title: Orders Paid - USA
   * Insight ID: d288aece-f30e-4844-bb80-b058c936fbc5
   */,
  OrdersPaidUSA: "d288aece-f30e-4844-bb80-b058c936fbc5"
  /**
   * Insight Title: Active Customers
   * Insight ID: dc8575f5-27e5-44be-a2dc-23d54b7777e7
   */,
  ActiveCustomers_2: "dc8575f5-27e5-44be-a2dc-23d54b7777e7"
  /**
   * Insight Title: Revenue Trend Detail
   * Insight ID: ddc4be59-1ea8-4b9d-86a2-6f389ae217b9
   */,
  RevenueTrendDetail: "ddc4be59-1ea8-4b9d-86a2-6f389ae217b9"
  /**
   * Insight Title: Net Sales by Product Category (v2)
   * Insight ID: e32644ad-1921-4b89-a7d2-79f31826e5cf
   */,
  NetSalesByProductCategoryV2: "e32644ad-1921-4b89-a7d2-79f31826e5cf"
  /**
   * Insight Title: Activity by Hour
   * Insight ID: f1027458-1123-4f4d-af20-0e21b1d5e009
   */,
  ActivityByHour: "f1027458-1123-4f4d-af20-0e21b1d5e009"
  /**
   * Insight Title: Test
   * Insight ID: ffd46c19-7009-43ef-9d5f-90eee91965a4
   */,
  Test: "ffd46c19-7009-43ef-9d5f-90eee91965a4",
};
export const Dashboards = {
  /**
   * Dashboard Title: 1. Overview
   * Dashboard ID: 092929af-375a-4e9c-964f-2add8cdbd259
   */
  _1Overview: "092929af-375a-4e9c-964f-2add8cdbd259"
  /**
   * Dashboard Title: 3. Customers
   * Dashboard ID: 370ec88c-2235-4e65-bb7c-5318280069a1
   */,
  _3Customers: "370ec88c-2235-4e65-bb7c-5318280069a1"
  /**
   * Dashboard Title: 5. USA Details
   * Dashboard ID: 8529ed1f-4a40-4cc0-903e-a2cffcfea5d3
   */,
  _5USADetails: "8529ed1f-4a40-4cc0-903e-a2cffcfea5d3"
  /**
   * Dashboard Title: 2. Sales
   * Dashboard ID: bf439696-d6c6-4d41-a102-dd98e2f3da35
   */,
  _2Sales: "bf439696-d6c6-4d41-a102-dd98e2f3da35"
  /**
   * Dashboard Title: 4. Products
   * Dashboard ID: c1d67cd4-94ad-40aa-91a5-cdf4143f778a
   */,
  _4Products: "c1d67cd4-94ad-40aa-91a5-cdf4143f778a",
};
