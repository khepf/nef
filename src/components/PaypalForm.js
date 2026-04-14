const PaypalForm = () => {
    return (
        <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_blank"
        >
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input
            type="hidden"
            name="hosted_button_id"
            value="TJ6PHQ52DWUQW"
            />
            <table>
            <tr>
                <td>
                <input type="hidden" name="on0" value="Number of Tables" />
                Number of Tables
                </td>
            </tr>
            <tr>
                <td>
                <select name="os0">
                    <option value="1 Table">1 Table $900.00 USD</option>
                    <option value="2 Tables">2 Tables $1,800.00 USD</option>
                    <option value="3 Tables">3 Tables $2,700.00 USD</option>
                    <option value="4 Tables">4 Tables $3,600.00 USD</option>
                </select>
                </td>
            </tr>
            <tr>
                <td>
                <input type="hidden" name="on1" value="Attendee Names" />
                Attendee Names
                </td>
            </tr>
            <tr>
                <td>
                <input type="text" name="os1" maxLength="200" />
                </td>
            </tr>
            </table>
            <input type="hidden" name="currency_code" value="USD" />
            <input
            type="image"
            src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif"
            border="0"
            name="submit"
            title="PayPal - The safer, easier way to pay online!"
            alt="Add to Cart"
            />
        </form>
    );
};