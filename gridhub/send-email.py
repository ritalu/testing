#!/usr/bin/env python

import json
import collections

# For sending the email.
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# For the SMTP server-related exceptions.
import socket
import ssl

def _format_email_content_html(message):
    contents = "<!DOCTYPE html>\n<html>\n<meta http-equiv='Content-Type' " \
               "content='text/html; charset=UTF-8' />\n<body>\n<pre>"
    """ Check out gmail smtp templates and fill in email contents here """
    contents += message
    contents += "\n</pre>\n</body>\n</html>"

    return contents


def _send_email(from_addr, to_addr, smtp_obj, email_content):
    # Create message container - the correct MIME type is multipart/alternative.
    msg = MIMEMultipart('alternative')
    msg['Subject'] = "Gridhub - Your Github Masterpiece"
    msg['From'] = from_addr
    msg['To'] = to_addr
    # Record the MIME type of the message.
    mime_message = MIMEText(email_content, 'html')
    # Attach parts into message container.
    msg.attach(mime_message)
    smtp_obj.sendmail(from_addr, to_addr, msg.as_string())
    print "\nSuccessfully sent email from {0} to {1}.\n".format(from_addr, to_addr)

    return smtp_obj.quit()


def _load_json_obj(json_file_path):
    """ Load from the given json file using the json loads() function.
        Print error message for improperly formatted json string.
        We'll use this function to potentially load a saved gridhub
        drawing (persisance in json).
    """
    decoded_json_obj = None
    with open(json_file_path, 'rb') as fp:
        decoded_json_obj = json.load(fp)
    return decoded_json_obj


def _main():
    to_addr, from_addr, smtp_server = "temp@gmail.com", "temp@gmail.com", "smtp.gmail.com"
    email_msg = "test"
    try:
        smtp_connection = smtplib.SMTP(smtp_server, 587) # 25, None, 5)
        smtp_connection.ehlo()
        smtp_connection.starttls()
        smtp_connection.login(from_addr, 'pass')
        email_content = _format_email_content_html(email_msg)
        _send_email(from_addr, to_addr, smtp_connection, email_content)
    except (socket.error, socket.gaierror) as e:
        print "Error: Unable to connect to the given server: {0}. " \
              "Please check if this server is valid and try again.\n " \
              "Exception message: {1}".format(smtp_server, e)
    except ssl.SSLError as e:
        print "Error: Connection timed out {0}. " \
              "Please check if this server is valid and try again.\n" \
              "Exception message: {1}".format(smtp_server, e)


if __name__ == '__main__':
    _main()
